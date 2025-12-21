/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllStages } from '@/api/stage';
import { getAllStatuses } from '@/api/status';
import {
    cancelZakaz,
    finishZakaz,
    updateStageZakaz,
    updateStatusZakaz,
} from '@/api/zakaz';
import CustomSelect from '@/components/Select';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Zakaz } from '@/lib/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

interface props {
    zakaz: Zakaz;
}

function ZakazCard({ zakaz }: props) {
    const { data: stages } = useQuery({
        queryKey: ['all-statuses'],
        queryFn: getAllStatuses,
    });

    const options2 = (stages?.data ?? []).map((p) => ({
        value: String(p.idStatus),
        label: p.StatusName,
    }));

    const queryClient = useQueryClient();

    const { mutate: cancel } = useMutation({
        mutationFn: async (zakazId: number) => cancelZakaz(zakazId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['all-zakazs'] });
            toast.success('Заказ отменен');
        },
        onError: (error) => {
            console.error('Ошибка отмены заказа:', error);
            toast.error('Ошибка отмены заказа');
        },
    });

    const { mutate: finish } = useMutation({
        mutationFn: async (zakazId: number) => finishZakaz(zakazId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['all-zakazs'] });
            toast.success('Заказ завершен');
        },
        onError: (error) => {
            console.error('Ошибка завершения заказа:', error);
            toast.error('Ошибка завершения заказа');
        },
    });

    const { mutate: upStatus } = useMutation({
        mutationFn: async ({
            status,
            zakazId,
        }: {
            zakazId: number;
            status: number;
        }) => updateStatusZakaz(zakazId, status),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['all-zakazs'] });
            toast.success('Статус обновлен успешно');
        },
        onError: (error) => {
            console.error('Ошибка обновления статуса заказа:', error);
            toast.error('Ошибка обновления статуса заказа');
        },
    });

    const { mutate: upStage } = useMutation({
        mutationFn: async ({
            stage,
            zakazId,
        }: {
            zakazId: number;
            stage: number;
        }) => updateStageZakaz(zakazId, stage),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['all-zakazs'] });
            toast.success('Этап обновлен успешно');
        },
        onError: (error) => {
            console.error('Ошибка обновления этапа заказа:', error);
            toast.error('Ошибка обновления этапа заказа');
        },
    });

    const { data: stages2 } = useQuery({
        queryKey: ['all-stages'],
        queryFn: getAllStages,
    });

    const options = (stages2?.data ?? []).map((p) => ({
        value: String(p.idStages),
        label: p.NameStages,
    }));

    const handle = (id: number, stage: number) => {
        upStage({
            stage,
            zakazId: id,
        });
    };

    const handle2 = (id: number, status: number) => {
        upStatus({
            status,
            zakazId: id,
        });
    };

    return (
        <Card
            className={`${zakaz.isCancelled && 'border-red-500'} ${zakaz.isFinished && 'border-green-500'}`}
        >
            <CardHeader>
                <CardTitle>Заказ #{zakaz.idZakaz}</CardTitle>
                <CardDescription>
                    <span>
                        Создан{' '}
                        {new Date(zakaz.zakazCreated).toLocaleDateString()}
                    </span>
                    {zakaz.zakazCompleted && (
                        <>
                            <br />
                            <span>
                                Завершен{' '}
                                {new Date(
                                    zakaz.zakazCompleted,
                                ).toLocaleDateString()}
                            </span>
                        </>
                    )}
                </CardDescription>
                {zakaz.isFinished && (
                    <CardAction>
                        <span className="text-green-500">Завершен</span>
                    </CardAction>
                )}
                {zakaz.isCancelled && (
                    <CardAction>
                        <span className="text-red-500">Отменен</span>
                    </CardAction>
                )}
            </CardHeader>
            <CardContent>
                <div className="flex flex-col justify-between gap-4">
                    <div className="flex flex-col gap-2">
                        <span>Продукт: {zakaz.product.NameProduct}</span>
                        <span>Количество: {zakaz.zakazQuantity}</span>
                        <span>Клиент: {zakaz.For}</span>
                        <span>Комментарий: {zakaz.Comment}</span>
                    </div>

                    {!zakaz.isCancelled && !zakaz.isFinished ? (
                        <>
                            <div className="h-[1px] before:w-full before:block before:h-full before:bg-gray-400"></div>
                            <span className="flex items-center gap-2">
                                <span className="w-48">Текущий этап:</span>

                                <CustomSelect
                                    value={
                                        zakaz?.stage?.idStages
                                            ? String(zakaz.stage.idStages)
                                            : ''
                                    }
                                    setValue={(newVal: any) =>
                                        handle(zakaz.idZakaz, newVal)
                                    }
                                    options={options}
                                    placeholder={'Выберите этап'}
                                />
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-48">Текущий статус:</span>

                                <CustomSelect
                                    value={
                                        zakaz?.status?.idStatus
                                            ? String(zakaz.status.idStatus)
                                            : ''
                                    }
                                    setValue={(newVal: any) => {
                                        handle2(zakaz.idZakaz, newVal);
                                    }}
                                    options={options2}
                                    placeholder={'Выберите статус'}
                                />
                            </span>
                            <div className="flex flex-col gap-2">
                                <div className="w-full flex gap-2">
                                    <Button
                                        className="w-1/2"
                                        variant={'destructive'}
                                        onClick={() => cancel(zakaz.idZakaz)}
                                    >
                                        Отменить
                                    </Button>
                                    <Button
                                        className="w-1/2"
                                        variant={'default'}
                                        onClick={() => finish(zakaz.idZakaz)}
                                    >
                                        Завершить
                                    </Button>
                                </div>
                            </div>
                        </>
                    ) : null}
                </div>
            </CardContent>
        </Card>
    );
}

export default ZakazCard;
