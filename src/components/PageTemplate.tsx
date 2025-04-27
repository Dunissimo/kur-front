/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import {
    DefaultValues,
    FieldValues,
    useForm,
    UseFormReturn,
} from 'react-hook-form';
import { toast } from 'sonner';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import FormProcess from './form/FormProcess';
import { ItemType } from '@/lib/types';
import PageTable from './PageTable';
import { AxiosResponse } from 'axios';

interface PageTemplateProps<
    TCreate,
    TUpdate,
    TSchema extends FieldValues,
    TData,
> {
    listOfString: string;
    itemName: ItemType;
    queryKey: string;
    tableHead: string[];
    formFields: (form: UseFormReturn<TSchema>) => React.ReactNode;
    defaultValues: DefaultValues<TSchema>;
    schema: any;

    getAll: () => Promise<{ data: TData[] }>;
    getOne: (id: number) => Promise<AxiosResponse<TData>>;
    create: (data: TCreate) => Promise<any>;
    update: (id: number, data: TUpdate) => Promise<any>;
    remove: (id: number) => Promise<any>;

    mapDataToTableBody?: (data: TData[]) => any[];
}

export default function PageTemplate<
    TCreate,
    TUpdate,
    TSchema extends FieldValues,
    TData,
>({
    listOfString,
    itemName,
    queryKey,
    tableHead,
    formFields,
    defaultValues,
    schema,
    getAll,
    getOne,
    create,
    update,
    remove,
    mapDataToTableBody,
}: PageTemplateProps<TCreate, TUpdate, TSchema, TData>) {
    const [createOpen, setCreateOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [currentEditId, setEditId] = useState<number | null>(null);
    const queryClient = useQueryClient();

    const { data, error } = useQuery({
        queryKey: [queryKey],
        queryFn: getAll,
    });

    const form = useForm<TSchema>({
        resolver: zodResolver(schema),
        mode: 'onChange',
        defaultValues,
    });

    const addMutation = useMutation({
        mutationFn: (data: TCreate) => create(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [queryKey] });

            setCreateOpen(false);

            toast.success(`${itemName} успешно создан`);
        },
    });

    const editMutation = useMutation({
        mutationFn: ({ id, data }: { id: number; data: TUpdate }) =>
            update(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [queryKey] });
            setEditOpen(false);
            toast.success(`${itemName} успешно обновлен`);
        },
    });

    const removeMutation = useMutation({
        mutationFn: (id: number) => remove(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [queryKey] });
        },
    });

    if (error) return <div>Ошибка загрузки данных</div>;

    return (
        <div>
            <Dialog open={createOpen} onOpenChange={setCreateOpen}>
                <DialogTrigger asChild>
                    <Button variant="secondary" className="mb-4">
                        Создать
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogTitle className="text-center">Создать</DialogTitle>
                    <DialogDescription />

                    <FormProcess
                        type="create"
                        addMutation={addMutation}
                        form={form}
                    >
                        {formFields(form)}
                    </FormProcess>
                </DialogContent>
            </Dialog>

            <Dialog open={editOpen} onOpenChange={setEditOpen}>
                <DialogContent>
                    <DialogTitle className="text-center">Изменить</DialogTitle>
                    <DialogDescription />
                    <FormProcess
                        type="edit"
                        getFn={getOne}
                        itemName={itemName}
                        editId={currentEditId}
                        editMutation={editMutation}
                        form={form}
                    >
                        {formFields(form)}
                    </FormProcess>
                </DialogContent>
            </Dialog>

            <PageTable
                caption={`Список ${listOfString}`}
                head={tableHead}
                body={
                    mapDataToTableBody
                        ? mapDataToTableBody(data?.data ?? [])
                        : data?.data
                }
                itemName={itemName}
                removeFn={removeMutation.mutate}
                setEditId={setEditId}
                setEditOpen={setEditOpen}
            />
        </div>
    );
}
