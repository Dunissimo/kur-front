/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormReturn } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { UseMutationResult, useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { AxiosResponse } from 'axios';
import { FormSchema, ItemType } from '@/lib/types';
import { transformDataForEdit, transformDataForSend } from '@/lib/utils';

interface BaseProps {
    children: React.ReactNode;
    form: UseFormReturn<any, any>;
}

// Для create
interface CreateFormProcessProps extends BaseProps {
    type: 'create';
    addMutation: UseMutationResult<
        AxiosResponse<any, any>,
        Error,
        any,
        unknown
    >;
    editMutation?: undefined;
    getFn?: (id: number) => Promise<AxiosResponse<any>>;
    itemName?: ItemType;
    editId?: undefined;
}

// Для edit
interface EditFormProcessProps extends BaseProps {
    type: 'edit';
    editId: number | null;
    editMutation: UseMutationResult<
        AxiosResponse<any, any>,
        Error,
        any,
        unknown
    >;
    addMutation?: undefined;
    itemName: ItemType;
    getFn: (id: number) => Promise<AxiosResponse<any>>;
}

type FormProcessProps = CreateFormProcessProps | EditFormProcessProps;

function FormProcess({
    children,
    type = 'create',
    editId,
    form,
    getFn,
    addMutation,
    itemName,
    editMutation,
}: FormProcessProps) {
    const item = useQuery({
        queryKey: [itemName, editId, getFn],
        queryFn: () =>
            getFn ? getFn(editId!) : Promise.reject('getFn is undefined'),
        enabled: type === 'edit' && !!editId && !!getFn,
    });

    useEffect(() => {
        if (type === 'edit' && item.data?.data) {
            form.reset(transformDataForEdit(item.data.data));
        }
    }, [item.data, type, form, editId]);

    const onSubmit = async (values: FormSchema) => {
        const data = transformDataForSend(values);

        if (type === 'edit' && editId) {
            editMutation.mutate({ id: editId, data });
        } else if (type === 'create' && addMutation) {
            addMutation.mutate(data);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {children}

                <Button type="submit" className="w-full">
                    {type === 'edit' ? 'Изменить' : 'Создать'}
                </Button>
            </form>
        </Form>
    );
}

export default FormProcess;
