import { UseFormReturn } from 'react-hook-form';
import DateInputField from './DateInputField';
import TextInputField from './TextInputField';
import { ProcessFormSchema } from '@/lib/form-schemas/processFormSchemas';

interface ProcessFormFieldsProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    form: UseFormReturn<ProcessFormSchema, any>;
}

function ProcessFormFields({ form }: ProcessFormFieldsProps) {
    return (
        <>
            <TextInputField
                name="statusNumber"
                label="Номер статуса"
                control={form.control}
            />
            <TextInputField
                name="zakazNumber"
                label="Номер заказа"
                control={form.control}
            />
            <TextInputField
                name="stageNumber"
                label="Номер этапа"
                control={form.control}
            />
            <TextInputField
                name="workshopNumber"
                label="Номер цеха"
                control={form.control}
            />
            <DateInputField
                name="startDate"
                label="Начальная дата"
                control={form.control}
            />
            <DateInputField
                name="finishDate"
                label="Финишная дата"
                control={form.control}
            />
        </>
    );
}

export default ProcessFormFields;
