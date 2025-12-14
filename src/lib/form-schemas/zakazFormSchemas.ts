import { z } from 'zod';

const REQUIRED_MESSAGE = 'Обязательно для заполнения';

export const zakazFormSchema = z.object({
    productId: z.string({ required_error: REQUIRED_MESSAGE }),
    zakazQuantity: z.string({ required_error: REQUIRED_MESSAGE }),
    for: z.string({ required_error: REQUIRED_MESSAGE }),
    comment: z.string({ required_error: REQUIRED_MESSAGE }),
});

export type ZakazFormSchema = z.infer<typeof zakazFormSchema>;
export type ZakazDefaultFormSchema = Partial<ZakazFormSchema>;
export const ZAKAZ_DEFAULT_VALUES = {
    productId: '',
    zakazQuantity: '',
    for: '',
    comment: '',
};
