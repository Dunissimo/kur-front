import { CreateStageDto, Stage, UpdateStageDto } from '@/lib/types';
import { api } from '..';
import { AxiosResponse } from 'axios';

export function getAllStages(): Promise<AxiosResponse<Stage[]>> {
    return api.get('/stage');
}

export function getOneStage(id: number) {
    return api.get(`/stage/${id}`);
}

export function createStage(dto: CreateStageDto) {
    return api.post('/stage/', JSON.stringify(dto));
}

export function updateStage(id: number, dto: UpdateStageDto) {
    return api.patch(`/stage/${id}`, JSON.stringify(dto));
}

export function deleteStage(id: number) {
    return api.delete(`/stage/${id}`);
}
