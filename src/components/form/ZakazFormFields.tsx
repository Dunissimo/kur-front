import { UseFormReturn } from 'react-hook-form';
import TextInputField from './TextInputField';
import { ZakazFormSchema } from '@/lib/form-schemas/zakazFormSchemas';

interface ZakazFormFieldsProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    form: UseFormReturn<ZakazFormSchema, any>;
}

function ZakazFormFields({ form }: ZakazFormFieldsProps) {
    return (
        <>
            <TextInputField
                name="productId"
                label="Номер продукции"
                control={form.control}
            />
            <TextInputField
                name="zakazQuantity"
                label="Количество"
                control={form.control}
            />
            <TextInputField name="for" label="Клиент" control={form.control} />
            <TextInputField
                name="comment"
                label="Комментарий"
                control={form.control}
            />
        </>
    );
}

export default ZakazFormFields;
