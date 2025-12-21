import { UseFormReturn } from 'react-hook-form';
import TextInputField from './TextInputField';
import { ZakazFormSchema } from '@/lib/form-schemas/zakazFormSchemas';
import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from '@/api/product';
import SelectInputField from './SelectInputField';

interface ZakazFormFieldsProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    form: UseFormReturn<ZakazFormSchema, any>;
}

function ZakazFormFields({ form }: ZakazFormFieldsProps) {
    const { data: products } = useQuery({
        queryKey: ['all-products'],
        queryFn: getAllProducts,
    });

    const productOptions = (products?.data ?? []).map((p) => ({
        value: String(p.idProduct),
        label: p.NameProduct,
    }));

    return (
        <>
            <SelectInputField
                name="productId"
                label="Продукт"
                control={form.control}
                options={productOptions}
                placeholder="Выберите продукт"
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
