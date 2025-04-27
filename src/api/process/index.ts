import { CreateProcessDto, Process, UpdateProcessDto } from '@/lib/types';
import { api } from '..';
import { AxiosResponse } from 'axios';

export function getAllProcesses(): Promise<AxiosResponse<Process[]>> {
    return api.get('/process');
}

export function getOneProcess(id: number): Promise<AxiosResponse<Process>> {
    return api.get(`/process/${id}`);
}

export function createProcess(dto: CreateProcessDto) {
    return api.post('/process/', JSON.stringify(dto));
}

export function updateProcess(id: number, dto: UpdateProcessDto) {
    return api.patch(`/process/${id}`, JSON.stringify(dto));
}

export function deleteProcess(id: number) {
    return api.delete(`/process/${id}`);
}
