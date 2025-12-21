import { ProductFormSchema } from './form-schemas/productFormSchemas';
import { StageFormSchema } from './form-schemas/stageFormSchemas';
import { StatusFormSchema } from './form-schemas/statusFormSchemas';
import { WorkshopFormSchema } from './form-schemas/WorkshopFormSchemas';
import { ZakazFormSchema } from './form-schemas/zakazFormSchemas';
import { ProductStageFormSchema } from './form-schemas/productStageFormSchemas';
import { UserFormSchema } from './form-schemas/userSchema';

export interface Status {
    idStatus: number;
    StatusName: string;
}

export type CreateStatusDto = Status;
export type UpdateStatusDto = Partial<CreateStatusDto>;

export interface Stage {
    idStages: number;
    NameStages: string;
    DescriptionStages: string;
    Workshop: Workshop;
}

export type CreateStageDto = Omit<Stage, 'idStages'>;
export type UpdateStageDto = Partial<CreateStageDto>;

export interface Zakaz {
    idZakaz: number;
    productId: number;
    product: Product;
    stageId: number;
    stage: Stage;
    statusId: number;
    status: Status;
    zakazQuantity: number;
    zakazCreated: Date;
    zakazCompleted: Date | null;
    For: string;
    Comment: string;
    isCancelled: boolean;
    isFinished: boolean;
}

export type CreateZakazDto = Zakaz;
export type UpdateZakazDto = Partial<CreateZakazDto>;

export interface Workshop {
    idWorkshop: number;
    NameWS: string;
    CurrentLoadWS: number;
    MaxLoadWS: number;
}

export type CreateWorkshopDto = Workshop;
export type UpdateWorkshopDto = Partial<CreateWorkshopDto>;

export interface Product {
    idProduct: number;
    NameProduct: string;
}

export type CreateProductDto = Product;
export type UpdateProductDto = Partial<CreateProductDto>;

export interface Duration {
    id: number;
    name: string;
}

export interface User {
    idUser: number;
    Name: string;
    Login: string;
}

export type CreateUserDto = Pick<User, 'Name' | 'Login'>;
export type UpdateUserDto = Partial<CreateUserDto>;

export interface ProductStage {
    idProductStages: number;
    productId: number;
    product: Product;
    stageId: number;
    stage: Stage;
    sort: number;
    durationId: number;
    duration: Duration;
    durationValue: number;
}

export type CreateProductStageDto = Omit<ProductStage, 'idProductStages'>;
export type UpdateProductStageDto = Partial<CreateProductStageDto>;

export type Item =
    | Status
    | Stage
    | Zakaz
    | Workshop
    | Product
    | ProductStage
    | User;
export type FormSchema =
    | StageFormSchema
    | StatusFormSchema
    | ZakazFormSchema
    | WorkshopFormSchema
    | ProductFormSchema
    | ProductStageFormSchema
    | UserFormSchema;

export type ItemType =
    | 'zakaz'
    | 'status'
    | 'stage'
    | 'workshop'
    | 'product'
    | 'product-stage'
    | 'user';

export interface LoginDto {
    username: string;
    password: string;
}
