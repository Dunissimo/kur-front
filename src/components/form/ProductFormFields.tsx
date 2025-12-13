import { UseFormReturn } from 'react-hook-form';
import TextInputField from './TextInputField';
import { ProductFormSchema } from '@/lib/form-schemas/productFormSchemas';

interface ProductFormFieldsProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    form: UseFormReturn<ProductFormSchema, any>;
}

function ProductFormFields({ form }: ProductFormFieldsProps) {
    return (
        <>
            <TextInputField
                name="productName"
                label="Навзание"
                control={form.control}
            />
        </>
    );
}

export default ProductFormFields;
