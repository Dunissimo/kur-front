import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { FormSchema, Item } from './types';
import { format } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('ru-RU', {});
}

const idMaps = {
    process: 'idProcess',
    status: 'idStatus',
    zakaz: 'idZakaz',
    stage: 'idStages',
    workshop: 'idWorkshop',
};

export function getId(itemName: string, item: Item) {
    const idKey = idMaps[itemName as keyof typeof idMaps] as keyof Item;

    return item[idKey];
}

export function transformDataForSend(values: FormSchema) {
    if ('statusNumber' in values) {
        return {
            StatusID: Number(values.statusNumber),
            ZakazID: Number(values.zakazNumber),
            StagesID: Number(values.stageNumber),
            WorkShopID: Number(values.workshopNumber),
            StartDate: values.startDate
                ? format(values.startDate, 'yyyy-MM-dd')
                : '',
            FinishDate: values.finishDate
                ? format(values.finishDate, 'yyyy-MM-dd')
                : '',
        };
    } else if ('stageName' in values) {
        return {
            NameStages: values.stageName,
        };
    } else if ('statusName' in values) {
        return {
            StatusName: values.statusName,
        };
    } else if ('zakazcol' in values) {
        return {
            Kogda: values.kogda ? format(values.kogda, 'yyyy-MM-dd') : '',
            Zakazcol: Number(values.zakazcol),
            For: values.for,
            Comment: values.comment,
        };
    } else if ('workshopName' in values) {
        return {
            NameWS: values.workshopName,
        };
    } else if ('NamePodship' in values) {
        return {
            NamePodship: values.podshipName,
            WorkShopID: values.workshopId,
        };
    }
}

export function transformDataForEdit(item: Item) {
    console.log(item);

    if ('idProcess' in item) {
        return {
            statusNumber: String(item.StatusID) || '',
            zakazNumber: String(item.ZakazID) || '',
            stageNumber: String(item.StagesID) || '',
            workshopNumber: String(item.WorkShopID) || '',
            startDate: new Date(item.StartDate),
            finishDate: new Date(item.FinishDate),
        };
    } else if ('idStages' in item) {
        return {
            stageName: item.NameStages || '',
        };
    } else if ('idStatus' in item) {
        return {
            statusName: item.StatusName || '',
        };
    } else if ('idZakaz' in item) {
        return {
            kogda: item.Kogda ? new Date(item.Kogda) : null,
            zakazcol: String(item.Zakazcol) || '',
            for: item.For || '',
            comment: item.Comment || '',
        };
    } else if ('idWorkshop' in item) {
        return {
            workshopName: item.NameWS || '',
        };
    } else if ('idPodship' in item) {
        return {
            podshipName: item.NamePodship,
            workshopId: item.WorkShopID,
        };
    }
}
