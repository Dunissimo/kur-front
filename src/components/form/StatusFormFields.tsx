import { UseFormReturn } from 'react-hook-form';
import TextInputField from './TextInputField';
import { StatusFormSchema } from '@/lib/form-schemas/statusFormSchemas';

interface StatusFormFieldsProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    form: UseFormReturn<StatusFormSchema, any>;
}

function StatusFormFields({ form }: StatusFormFieldsProps) {
    return (
        <>
            <TextInputField
                name="statusName"
                label="Название статуса"
                control={form.control}
            />
        </>
    );
}

export default StatusFormFields;
