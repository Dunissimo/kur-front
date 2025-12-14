import { UseFormReturn } from 'react-hook-form';
import TextInputField from './TextInputField';
import { StageFormSchema } from '@/lib/form-schemas/stageFormSchemas';
import { useQuery } from '@tanstack/react-query';
import { getAllWorkshops } from '@/api/workshop';
import SelectInputField from './SelectInputField';

interface StageFormFieldsProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    form: UseFormReturn<StageFormSchema, any>;
}

function StageFormFields({ form }: StageFormFieldsProps) {
    const { data: workshops } = useQuery({
        queryKey: ['all-workshops'],
        queryFn: getAllWorkshops,
    });

    const options = (workshops?.data ?? []).map((p) => ({
        value: String(p.idWorkshop),
        label: p.NameWS,
    }));

    return (
        <>
            <TextInputField
                name="stageName"
                label="Название этапа"
                control={form.control}
            />
            <TextInputField
                name="stageDescription"
                label="Описание этапа"
                control={form.control}
            />
            <SelectInputField
                name="stageWorkshopId"
                label="Цех"
                control={form.control}
                options={options}
                placeholder="Выберите цех"
            />
        </>
    );
}

export default StageFormFields;
