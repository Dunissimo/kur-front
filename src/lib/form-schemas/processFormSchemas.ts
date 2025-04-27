import { z } from 'zod';

const REQUIRED_MESSAGE = 'Обязательно для заполнения';

export const processFormSchema = z.object({
    statusNumber: z
        .string({ required_error: REQUIRED_MESSAGE })
        .min(1, 'Введите номер статуса'),
    zakazNumber: z
        .string({ required_error: REQUIRED_MESSAGE })
        .min(1, 'Введите номер заказа'),
    stageNumber: z
        .string({ required_error: REQUIRED_MESSAGE })
        .min(1, 'Введите номер этапа'),
    workshopNumber: z
        .string({ required_error: REQUIRED_MESSAGE })
        .min(1, 'Введите номер цеха'),
    startDate: z
        .date({ required_error: REQUIRED_MESSAGE })
        .optional()
        .refine((value) => value !== null, { message: REQUIRED_MESSAGE }),
    finishDate: z
        .date({ required_error: REQUIRED_MESSAGE })
        .optional()
        .refine((value) => value !== null, { message: REQUIRED_MESSAGE }),
});

export type ProcessFormSchema = z.infer<typeof processFormSchema>;
export type ProcessDefaultFormSchema = Partial<ProcessFormSchema>;
export const PROCESS_DEFAULT_VALUES = {
    statusNumber: '',
    zakazNumber: '',
    stageNumber: '',
    workshopNumber: '',
    startDate: undefined,
    finishDate: undefined,
};
