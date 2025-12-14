import { z } from 'zod';

const REQUIRED_MESSAGE = 'Обязательно для заполнения';

export const productStageFormSchema = z.object({
    productId: z.string({ required_error: REQUIRED_MESSAGE }),
    stageId: z.string({ required_error: REQUIRED_MESSAGE }),
    sort: z.string({ required_error: REQUIRED_MESSAGE }),
    durationValue: z.string({ required_error: REQUIRED_MESSAGE }),
});

export type ProductStageFormSchema = z.infer<typeof productStageFormSchema>;
export type ProductStageDefaultFormSchema = Partial<ProductStageFormSchema>;
export const PRODUCT_STAGE_DEFAULT_VALUES = {
    productId: '',
    stageId: '',
    sort: '',
    durationValue: '',
};
