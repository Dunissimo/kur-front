import { UseFormReturn } from 'react-hook-form';
import TextInputField from './TextInputField';
import { ZakazFormSchema } from '@/lib/form-schemas/zakazFormSchemas';
import DateInputField from './DateInputField';

interface ZakazFormFieldsProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    form: UseFormReturn<ZakazFormSchema, any>;
}

function ZakazFormFields({ form }: ZakazFormFieldsProps) {
    return (
        <>
            <DateInputField name="kogda" label="Когда" control={form.control} />
            <TextInputField
                name="zakazcol"
                label="Количество"
                control={form.control}
            />
            <TextInputField name="for" label="Для" control={form.control} />
            <TextInputField
                name="comment"
                label="Комментарий"
                control={form.control}
            />
        </>
    );
}

export default ZakazFormFields;
