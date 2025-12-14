import { getProductStages } from '@/api/product';
import { Button } from '@/components/ui/button';
import { Stage } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router';
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

function ProductStage() {
    const { id } = useParams();

    const navigate = useNavigate();

    const { data } = useQuery({
        queryKey: ['product-stages', id],
        queryFn: () => getProductStages(Number(id)),
        enabled: !!id,
    });

    console.log();

    return (
        <>
            <Button onClick={() => navigate(-1)}>Вернуться</Button>

            <div className="pb-8">
                <h2 className="mt-8 mb-6 text-2xl">
                    Этапы работ для "{data?.data.NameProduct}"
                </h2>

                <div className="flex flex-col gap-8">
                    {data?.data.productStages.map(
                        ({ stage, durationValue }, index) => (
                            <Card className="max-w-1/2">
                                <CardHeader>
                                    <CardTitle>
                                        Этап #{index + 1}:{' '}
                                        {(stage as Stage).NameStages}
                                    </CardTitle>
                                    <CardDescription>
                                        {(stage as Stage).DescriptionStages}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <span>
                                        Цех:{' '}
                                        {(stage as Stage)?.Workshop?.NameWS}
                                    </span>
                                    <br />
                                    <span>
                                        Время на этап: {durationValue} мин
                                    </span>
                                    <br />
                                </CardContent>
                            </Card>
                        ),
                    )}
                </div>
            </div>
        </>
    );
}

export default ProductStage;
