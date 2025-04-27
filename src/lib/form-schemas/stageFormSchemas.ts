import { z } from 'zod';

const REQUIRED_MESSAGE = 'Обязательно для заполнения';

export const stageFormSchema = z.object({
    stageName: z
        .string({ required_error: REQUIRED_MESSAGE })
        .min(1, 'Введите название этапа'),
});

export type StageFormSchema = z.infer<typeof stageFormSchema>;
export type StageDefaultFormSchema = Partial<StageFormSchema>;
export const STAGE_DEFAULT_VALUES = {
    stageName: '',
};
