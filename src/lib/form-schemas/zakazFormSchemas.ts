import { z } from 'zod';

const REQUIRED_MESSAGE = 'Обязательно для заполнения';

export const zakazFormSchema = z.object({
    kogda: z
        .date({ required_error: REQUIRED_MESSAGE })
        .optional()
        .refine((value) => value !== null, { message: REQUIRED_MESSAGE }),
    zakazcol: z
        .string({ required_error: REQUIRED_MESSAGE })
        .min(1, REQUIRED_MESSAGE),
    for: z
        .string({ required_error: REQUIRED_MESSAGE })
        .min(1, REQUIRED_MESSAGE),
    comment: z
        .string({ required_error: REQUIRED_MESSAGE })
        .min(1, REQUIRED_MESSAGE),
});

export type ZakazFormSchema = z.infer<typeof zakazFormSchema>;
export type ZakazDefaultFormSchema = Partial<ZakazFormSchema>;
export const ZAKAZ_DEFAULT_VALUES = {
    kogda: undefined,
    zakazcol: '',
    for: '',
    comment: '',
};
