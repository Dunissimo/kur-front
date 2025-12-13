import {
    createProduct,
    deleteProduct,
    getAllProducts,
    getOneProduct,
    mapProductData,
    updateProduct,
} from '@/api/product';
import ProductFormFields from '@/components/form/ProductFormFields';
import PageTemplate from '@/components/PageTemplate';
import {
    PRODUCT_DEFAULT_VALUES,
    productFormSchema,
    ProductFormSchema,
} from '@/lib/form-schemas/productFormSchemas';
import { CreateProductDto, UpdateProductDto } from '@/lib/types';

function ProductPage() {
    return (
        <div>
            <PageTemplate<
                CreateProductDto,
                UpdateProductDto,
                ProductFormSchema,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                any
            >
                listOfString="подшипников"
                itemName="product"
                queryKey="all-products"
                tableHead={['Номер продукции', 'Название продукции']}
                formFields={(form) => <ProductFormFields form={form} />}
                defaultValues={PRODUCT_DEFAULT_VALUES}
                schema={productFormSchema}
                getAll={getAllProducts}
                getOne={getOneProduct}
                create={createProduct}
                update={updateProduct}
                remove={deleteProduct}
                mapDataToTableBody={mapProductData}
            />
        </div>
    );
}

export default ProductPage;
