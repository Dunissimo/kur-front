import { z } from 'zod';

const REQUIRED_MESSAGE = 'Обязательно для заполнения';

export const workshopFormSchema = z.object({
    workshopName: z.string({ required_error: REQUIRED_MESSAGE }),
    workshopMaxLoad: z.string({ required_error: REQUIRED_MESSAGE }),
});

export type WorkshopFormSchema = z.infer<typeof workshopFormSchema>;
export type WorkshopDefaultFormSchema = Partial<WorkshopFormSchema>;
export const WORKSHOP_DEFAULT_VALUES = {
    workshopName: '',
    workshopMaxLoad: 1,
};
