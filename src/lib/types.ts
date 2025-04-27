import { ProcessFormSchema } from './form-schemas/processFormSchemas';
import { StageFormSchema } from './form-schemas/stageFormSchemas';
import { StatusFormSchema } from './form-schemas/statusFormSchemas';
import { WorkshopFormSchema } from './form-schemas/WorkshopFormSchemas';
import { ZakazFormSchema } from './form-schemas/zakazFormSchemas';

export interface Process {
    idProcess: number;
    StatusID: number;
    ZakazID: number;
    StagesID: number;
    WorkShopID: number;
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
}

export type CreateStageDto = Omit<Stage, 'idStages'>;
export type UpdateStageDto = Partial<CreateStageDto>;

export interface Zakaz {
    idZakaz: number;
    Kogda: Date | null;
    Zakazcol: number;
    For: string;
    Comment: string;
}

export type CreateZakazDto = Zakaz;
export type UpdateZakazDto = Partial<CreateZakazDto>;

export interface Workshop {
    idWorkshop: number;
    NameWS: string;
}

export type CreateWorkshopDto = Workshop;
export type UpdateWorkshopDto = Partial<CreateWorkshopDto>;

export type Item = Process | Status | Stage | Zakaz | Workshop;
export type FormSchema =
    | ProcessFormSchema
    | StageFormSchema
    | StatusFormSchema
    | ZakazFormSchema
    | WorkshopFormSchema;

export type ItemType = 'process' | 'zakaz' | 'status' | 'stage' | 'workshop';
