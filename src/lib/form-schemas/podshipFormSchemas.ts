import { z } from 'zod';

const REQUIRED_MESSAGE = 'Обязательно для заполнения';

export const podshipFormSchema = z.object({
    podshipName: z.string({ required_error: REQUIRED_MESSAGE }),
    workshopId: z.string({ required_error: REQUIRED_MESSAGE }),
});

export type PodshipFormSchema = z.infer<typeof podshipFormSchema>;
export type PodshipDefaultFormSchema = Partial<PodshipFormSchema>;
export const PODSHIP_DEFAULT_VALUES = {
    podshipName: '',
    workshopId: '',
};
