import { UseFormReturn } from 'react-hook-form';
import TextInputField from './TextInputField';
import { StageFormSchema } from '@/lib/form-schemas/stageFormSchemas';

interface StageFormFieldsProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    form: UseFormReturn<StageFormSchema, any>;
}

function StageFormFields({ form }: StageFormFieldsProps) {
    return (
        <>
            <TextInputField
                name="stageName"
                label="Название этапа"
                control={form.control}
            />
        </>
    );
}

export default StageFormFields;
