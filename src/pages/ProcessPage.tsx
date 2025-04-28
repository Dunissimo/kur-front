import {
    createProcess,
    deleteProcess,
    getAllProcesses,
    getOneProcess,
    mapProcessData,
    updateProcess,
} from '@/api/process';
import {
    PROCESS_DEFAULT_VALUES,
    processFormSchema,
    ProcessFormSchema,
} from '@/lib/form-schemas/processFormSchemas';
import { CreateProcessDto, UpdateProcessDto } from '@/lib/types';
import ProcessFormFields from '@/components/form/ProcessFormFields';
import PageTemplate from '@/components/PageTemplate';

function ProcessPage() {
    return (
        <PageTemplate<
            CreateProcessDto,
            UpdateProcessDto,
            ProcessFormSchema,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            any
        >
            listOfString="процессов"
            itemName="process"
            queryKey="all-processes"
            tableHead={[
                'Номер процесса',
                'Cтатус',
                'Номер заказа',
                'Этап',
                'Цех',
                'Начальная дата',
                'Финишная дата',
            ]}
            formFields={(form) => <ProcessFormFields form={form} />}
            defaultValues={PROCESS_DEFAULT_VALUES}
            schema={processFormSchema}
            getAll={getAllProcesses}
            getOne={getOneProcess}
            create={createProcess}
            update={updateProcess}
            remove={deleteProcess}
            mapDataToTableBody={mapProcessData}
        />
    );
}

export default ProcessPage;
