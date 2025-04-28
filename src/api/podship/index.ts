import {
    CreatePodshipDto,
    Workshop,
    UpdatePodshipDto,
    Podship,
} from '@/lib/types';
import { api } from '..';
import { AxiosResponse } from 'axios';

export function getAllPodships(): Promise<AxiosResponse<Workshop[]>> {
    return api.get('/podship');
}

export function getOnePodship(id: number) {
    return api.get(`/podship/${id}`);
}

export function createPodship(dto: CreatePodshipDto) {
    return api.post('/podship/', JSON.stringify(dto));
}

export function updatePodship(id: number, dto: UpdatePodshipDto) {
    return api.patch(`/podship/${id}`, JSON.stringify(dto));
}

export function deletePodship(id: number) {
    return api.delete(`/podship/${id}`);
}

export function mapPodshipData(data: Podship[]) {
    return data.map((podship) => ({
        idPodship: podship.idPodship,
        name: podship.NamePodship,
        workshopName: podship.WorkShopID.NameWS,
    }));
}
