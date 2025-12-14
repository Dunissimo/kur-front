import { UseFormReturn } from 'react-hook-form';
import TextInputField from './TextInputField';
import SelectInputField from './SelectInputField';
import { ProductStageFormSchema } from '@/lib/form-schemas/productStageFormSchemas';
import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from '@/api/product';
import { getAllStages } from '@/api/stage';

interface ProductStageFormFieldsProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    form: UseFormReturn<ProductStageFormSchema, any>;
}

function ProductStageFormFields({ form }: ProductStageFormFieldsProps) {
    const { data: products } = useQuery({
        queryKey: ['all-products'],
        queryFn: getAllProducts,
    });

    const { data: stages } = useQuery({
        queryKey: ['all-stages'],
        queryFn: getAllStages,
    });

    // const { data: durations } = useQuery({
    //     queryKey: ['all-durations'],
    //     queryFn: getAllStages,
    // });

    const productOptions = (products?.data ?? []).map((p) => ({
        value: String(p.idProduct),
        label: p.NameProduct,
    }));

    const stageOptions = (stages?.data ?? []).map((s) => ({
        value: String(s.idStages),
        label: s.NameStages,
    }));

    // const durationsOptions = (durations?.data ?? []).map((s) => ({
    //     value: String(s.idStages),
    //     label: s.NameStages,
    // }));

    return (
        <>
            <SelectInputField
                name="productId"
                label="Продукт"
                control={form.control}
                options={productOptions}
                placeholder="Выберите продукт"
            />
            <SelectInputField
                name="stageId"
                label="Этап"
                control={form.control}
                options={stageOptions}
                placeholder="Выберите этап"
            />
            <TextInputField
                name="sort"
                label="Сортировка"
                control={form.control}
            />
            <TextInputField
                name="durationValue"
                label="Время выполнения"
                control={form.control}
            />
        </>
    );
}

export default ProductStageFormFields;
