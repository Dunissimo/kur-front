/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import { DefaultValues, FieldValues, UseFormReturn } from 'react-hook-form';
import { ItemType } from '@/lib/types';
import PageTable from './PageTable';
import { AxiosResponse } from 'axios';
import CreateDialog from './CreateDialog';
import UpdateDialog from './UpdateDialog';

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
    formFields?: (form: UseFormReturn<TSchema>) => React.ReactNode;
    defaultValues?: DefaultValues<TSchema>;
    schema?: any;

    getAll?: () => Promise<{ data: TData[] }>;
    getOne?: (id: number) => Promise<AxiosResponse<TData>>;
    create?: (data: TCreate) => Promise<any>;
    update?: (id: number, data: TUpdate) => Promise<any>;
    remove?: (id: number) => Promise<any>;

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
    const [editOpen, setEditOpen] = useState(false);
    const [currentEditId, setEditId] = useState<number | null>(null);
    const queryClient = useQueryClient();

    const isEditable = useMemo(() => !!update, [update]);

    const { data, error } = useQuery({
        queryKey: [queryKey],
        queryFn: getAll,
    });

    const removeMutation = useMutation({
        mutationFn: (id: number) => remove!(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [queryKey] });
        },
    });

    if (error) return <div>Ошибка загрузки данных</div>;

    return (
        <div>
            {create && defaultValues && formFields ? (
                <CreateDialog<TCreate, TSchema>
                    create={create}
                    defaultValues={defaultValues}
                    formFields={formFields}
                    itemName={itemName}
                    queryKey={queryKey}
                    schema={schema}
                />
            ) : null}

            {defaultValues && formFields && getOne && update ? (
                <UpdateDialog
                    currentEditId={currentEditId}
                    defaultValues={defaultValues}
                    itemName={itemName}
                    queryKey={queryKey}
                    schema={schema}
                    editOpen={editOpen}
                    formFields={formFields}
                    getOne={getOne}
                    update={update}
                    setEditOpen={setEditOpen}
                />
            ) : null}

            <PageTable
                caption={`Список ${listOfString}`}
                head={tableHead}
                body={
                    mapDataToTableBody
                        ? mapDataToTableBody(data?.data ?? [])
                        : data?.data
                }
                itemName={itemName}
                isEditable={isEditable}
                removeFn={removeMutation.mutate}
                setEditId={setEditId}
                setEditOpen={setEditOpen}
            />
        </div>
    );
}
