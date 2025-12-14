import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import FormProcess from '@/components/form/FormProcess';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import {
    DefaultValues,
    FieldValues,
    useForm,
    UseFormReturn,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

/* eslint-disable @typescript-eslint/no-explicit-any */

interface CreateDialogProps<TCreate, TSchema extends FieldValues> {
    create: (data: TCreate) => Promise<any>;
    formFields: (form: UseFormReturn<TSchema>) => React.ReactNode;
    queryKey: string;
    itemName: string;
    defaultValues: DefaultValues<TSchema>;
    schema: any;
}

function CreateDialog<TCreate, TSchema extends FieldValues>({
    create,
    formFields,
    queryKey,
    itemName,
    defaultValues,
    schema,
}: CreateDialogProps<TCreate, TSchema>) {
    const [createOpen, setCreateOpen] = useState(false);
    const queryClient = useQueryClient();
    const addMutation = useMutation({
        mutationFn: (data: TCreate) => create(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [queryKey] });

            setCreateOpen(false);

            toast.success(`${itemName} успешно создан`);
        },
    });

    const form = useForm<TSchema>({
        resolver: zodResolver(schema),
        mode: 'onChange',
        defaultValues,
    });

    return (
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
    );
}

export default CreateDialog;
