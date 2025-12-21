import { AxiosResponse } from 'axios';
import { api } from '..';
import { CreateUserDto, UpdateUserDto, User } from '@/lib/types';

export function getUser(id: number): Promise<AxiosResponse<User>> {
    return api.get(`/user/${id}`);
}

export function getAllUsers(): Promise<AxiosResponse<User[]>> {
    return api.get(`/user/all`);
}
export function createUser(dto: CreateUserDto) {
    return api.post('/user/', JSON.stringify(dto));
}

export function updateUser(id: number, dto: UpdateUserDto) {
    return api.patch(`/user/${id}`, JSON.stringify(dto));
}

export function deleteUser(id: number) {
    return api.delete(`/user/${id}`);
}

export function mapStageData(data: User[]) {
    return data.map((user) => ({
        id: user.idUser,
        name: user.Name,
        login: user.Login,
    }));
}
