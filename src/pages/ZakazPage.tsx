import {
    createZakaz,
    deleteZakaz,
    getAllZakazs,
    getOneZakaz,
    updateZakaz,
} from '@/api/zakaz';
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    ZAKAZ_DEFAULT_VALUES,
    ZakazFormSchema,
    zakazFormSchema,
} from '@/lib/form-schemas/zakazFormSchemas';
import ZakazFormFields from '@/components/form/ZakazFormFields';
import { CreateZakazDto, UpdateZakazDto } from '@/lib/types';
import CreateDialog from '@/components/CreateDialog';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import EditTableItem from '@/components/EditTableItem';
import { getId } from '@/lib/utils';
import { useState } from 'react';
import RemoveTableItem from '@/components/RemoveTableItem';
import UpdateDialog from '@/components/UpdateDialog';

/* eslint-disable @typescript-eslint/no-explicit-any */

function ZakazPage() {
    const [currentEditId, setEditId] = useState<number | null>(null);
    const [editOpen, setEditOpen] = useState(false);
    const queryClient = useQueryClient();

    const { data } = useQuery({
        queryKey: ['all-zakazs'],
        queryFn: getAllZakazs,
    });

    const removeMutation = useMutation({
        mutationFn: (id: number) => deleteZakaz(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['all-zakazs'] });
        },
    });

    return (
        <>
            <CreateDialog<CreateZakazDto, ZakazFormSchema>
                create={createZakaz}
                defaultValues={ZAKAZ_DEFAULT_VALUES}
                formFields={(form) => <ZakazFormFields form={form} />}
                itemName="zakaz"
                queryKey="all-zakazs"
                schema={zakazFormSchema}
            />

            <UpdateDialog<UpdateZakazDto, ZakazFormSchema, any>
                currentEditId={currentEditId}
                defaultValues={ZAKAZ_DEFAULT_VALUES}
                editOpen={editOpen}
                formFields={(form) => <ZakazFormFields form={form} />}
                getOne={getOneZakaz}
                itemName="zakaz"
                queryKey="all-zakazs"
                schema={zakazFormSchema}
                setEditOpen={setEditOpen}
                update={updateZakaz}
            />

            <div className="mt-4 mb-8 grid grid-cols-4">
                {data?.data.map((zakaz) => {
                    return (
                        <Card>
                            <CardHeader>
                                <CardTitle>Заказ #{zakaz.idZakaz}</CardTitle>
                                <CardDescription>
                                    <span>
                                        Создан{' '}
                                        {new Date(
                                            zakaz.zakazCreated,
                                        ).toLocaleDateString()}
                                    </span>
                                </CardDescription>
                                <CardAction className="flex gap-2">
                                    <EditTableItem
                                        setEditId={setEditId}
                                        setEditOpen={setEditOpen}
                                        id={getId('zakaz', zakaz)}
                                    />

                                    <RemoveTableItem
                                        fn={removeMutation.mutate}
                                        id={getId('zakaz', zakaz)}
                                    />
                                </CardAction>
                            </CardHeader>
                            <CardContent>
                                <span>
                                    Что произвести: {zakaz.product.NameProduct}
                                </span>
                                <br />
                                <span>Количество: {zakaz.zakazQuantity}</span>
                                <br />
                                <span>Клиент: {zakaz.For}</span>
                                <br />
                                <span>Комментарий: {zakaz.Comment}</span>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </>
    );
}

export default ZakazPage;
