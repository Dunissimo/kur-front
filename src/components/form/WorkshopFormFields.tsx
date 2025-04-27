import { UseFormReturn } from 'react-hook-form';
import TextInputField from './TextInputField';
import { WorkshopFormSchema } from '@/lib/form-schemas/WorkshopFormSchemas';

interface WorkshopFormFieldsProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    form: UseFormReturn<WorkshopFormSchema, any>;
}

function WorkshopFormFields({ form }: WorkshopFormFieldsProps) {
    return (
        <>
            <TextInputField
                name="workshopName"
                label="Название цеха"
                control={form.control}
            />
        </>
    );
}

export default WorkshopFormFields;
