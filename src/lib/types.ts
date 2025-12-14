import { ProductFormSchema } from './form-schemas/productFormSchemas';
import { ProcessFormSchema } from './form-schemas/processFormSchemas';
import { StageFormSchema } from './form-schemas/stageFormSchemas';
import { StatusFormSchema } from './form-schemas/statusFormSchemas';
import { WorkshopFormSchema } from './form-schemas/WorkshopFormSchemas';
import { ZakazFormSchema } from './form-schemas/zakazFormSchemas';
import { ProductStageFormSchema } from './form-schemas/productStageFormSchemas';

export interface Process {
    idProcess: number;
    StatusID: Status;
    ZakazID: Zakaz;
    StagesID: Stage;
    WorkShopID: Workshop;
    StartDate: string | Date;
    FinishDate: string | Date;
}

export type CreateProcessDto = Omit<Process, 'idProcess'>;
export type UpdateProcessDto = Partial<CreateProcessDto>;

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
    zakazQuantity: number;
    zakazCreated: Date;
    zakazCompleted: Date | null;
    For: string;
    Comment: string;
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
    | Process
    | Status
    | Stage
    | Zakaz
    | Workshop
    | Product
    | ProductStage;
export type FormSchema =
    | ProcessFormSchema
    | StageFormSchema
    | StatusFormSchema
    | ZakazFormSchema
    | WorkshopFormSchema
    | ProductFormSchema
    | ProductStageFormSchema;

export type ItemType =
    | 'process'
    | 'zakaz'
    | 'status'
    | 'stage'
    | 'workshop'
    | 'product'
    | 'product-stage';

export interface LoginDto {
    username: string;
    password: string;
}
