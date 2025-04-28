import { UseFormReturn } from 'react-hook-form';
import TextInputField from './TextInputField';
import { PodshipFormSchema } from '@/lib/form-schemas/podshipFormSchemas';

interface PodshipFormFieldsProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    form: UseFormReturn<PodshipFormSchema, any>;
}

function PodshipFormFields({ form }: PodshipFormFieldsProps) {
    return (
        <>
            <TextInputField
                name="podshipName"
                label="Навзание"
                control={form.control}
            />
            <TextInputField
                name="workshopId"
                label="Номер цеха"
                control={form.control}
            />
        </>
    );
}

export default PodshipFormFields;
