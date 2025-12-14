import {
    createProductStage,
    deleteProductStage,
    getAllProductStages,
    getOneProductStage,
    mapProductStageData,
    updateProductStage,
} from '@/api/product-stage';
import ProductStageFormFields from '@/components/form/ProductStageFormFields';
import PageTemplate from '@/components/PageTemplate';
import {
    PRODUCT_STAGE_DEFAULT_VALUES,
    productStageFormSchema,
    ProductStageFormSchema,
} from '@/lib/form-schemas/productStageFormSchemas';
import { CreateProductStageDto, UpdateProductStageDto } from '@/lib/types';

function ProductStagePage() {
    return (
        <div>
            <PageTemplate<
                CreateProductStageDto,
                UpdateProductStageDto,
                ProductStageFormSchema,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                any
            >
                listOfString="этапов продукции"
                itemName="product-stage"
                queryKey="all-product-stages"
                tableHead={[
                    'ID',
                    'Продукт',
                    'Этап',
                    'Сортировка',
                    'Время выполнения',
                ]}
                formFields={(form) => <ProductStageFormFields form={form} />}
                defaultValues={PRODUCT_STAGE_DEFAULT_VALUES}
                schema={productStageFormSchema}
                getAll={getAllProductStages}
                getOne={getOneProductStage}
                create={createProductStage}
                update={updateProductStage}
                remove={deleteProductStage}
                mapDataToTableBody={mapProductStageData}
            />
        </div>
    );
}

export default ProductStagePage;
