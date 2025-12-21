import { createZakaz, getAllZakazs } from '@/api/zakaz';
import {
    ZAKAZ_DEFAULT_VALUES,
    ZakazFormSchema,
    zakazFormSchema,
} from '@/lib/form-schemas/zakazFormSchemas';
import ZakazFormFields from '@/components/form/ZakazFormFields';
import { CreateZakazDto } from '@/lib/types';
import CreateDialog from '@/components/CreateDialog';
import { useQuery } from '@tanstack/react-query';
import ZakazCard from '@/components/ZakazCard';

function ZakazPage() {
    const { data } = useQuery({
        queryKey: ['all-zakazs'],
        queryFn: getAllZakazs,
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

            <div className="mt-4 mb-8 grid grid-cols-3 gap-4">
                {data?.data.map((zakaz) => {
                    return <ZakazCard zakaz={zakaz} key={zakaz.idZakaz} />;
                })}
            </div>
        </>
    );
}

export default ZakazPage;
