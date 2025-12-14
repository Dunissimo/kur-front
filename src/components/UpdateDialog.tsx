import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
} from '@/components/ui/dialog';
import FormProcess from './form/FormProcess';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { ItemType } from '@/lib/types';
import { AxiosResponse } from 'axios';
import {
    DefaultValues,
    FieldValues,
    useForm,
    UseFormReturn,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

/* eslint-disable @typescript-eslint/no-explicit-any */

interface UpdateDialogProps<TUpdate, TSchema extends FieldValues, TData> {
    currentEditId: number | null;
    queryKey: string;
    itemName: ItemType;
    schema: any;
    defaultValues: DefaultValues<TSchema>;
    editOpen: boolean;

    formFields: (form: UseFormReturn<TSchema>) => React.ReactNode;
    getOne: (id: number) => Promise<AxiosResponse<TData>>;
    update: (id: number, data: TUpdate) => Promise<any>;
    setEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function UpdateDialog<TUpdate, TSchema extends FieldValues, TData>({
    itemName,
    queryKey,
    currentEditId,
    schema,
    defaultValues,
    editOpen,
    formFields,
    getOne,
    update,
    setEditOpen,
}: UpdateDialogProps<TUpdate, TSchema, TData>) {
    const queryClient = useQueryClient();

    const form = useForm<TSchema>({
        resolver: zodResolver(schema),
        mode: 'onChange',
        defaultValues,
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

    return (
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
    );
}

export default UpdateDialog;
