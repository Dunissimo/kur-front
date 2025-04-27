import {
    createZakaz,
    deleteZakaz,
    getAllZakazs,
    getOneZakaz,
    updateZakaz,
} from '@/api/zakaz';
import {
    ZAKAZ_DEFAULT_VALUES,
    ZakazFormSchema,
    zakazFormSchema,
} from '@/lib/form-schemas/zakazFormSchemas';
import ZakazFormFields from '@/components/form/ZakazFormFields';
import PageTemplate from '@/components/PageTemplate';
import { CreateZakazDto, UpdateZakazDto } from '@/lib/types';

function ZakazPage() {
    return (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        <PageTemplate<CreateZakazDto, UpdateZakazDto, ZakazFormSchema, any>
            listOfString="заказов"
            itemName="zakaz"
            queryKey="all-zakazs"
            tableHead={[
                'Номер заказа',
                'Когда',
                'Количество',
                'Для',
                'Комментарий',
            ]}
            formFields={(form) => <ZakazFormFields form={form} />}
            defaultValues={ZAKAZ_DEFAULT_VALUES}
            schema={zakazFormSchema}
            getAll={getAllZakazs}
            getOne={getOneZakaz}
            create={createZakaz}
            update={updateZakaz}
            remove={deleteZakaz}
        />
    );
}

export default ZakazPage;
