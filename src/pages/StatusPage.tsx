import {
    createStatus,
    deleteStatus,
    getAllStatuses,
    getOneStatus,
    updateStatus,
} from '@/api/status';
import {
    STATUS_DEFAULT_VALUES,
    statusFormSchema,
    StatusFormSchema,
} from '@/lib/form-schemas/statusFormSchemas';
import { CreateStatusDto, UpdateStatusDto } from '@/lib/types';
import StatusFormFields from '@/components/form/StatusFormFields';
import PageTemplate from '@/components/PageTemplate';

function StatusPage() {
    return (
        <PageTemplate<
            CreateStatusDto,
            UpdateStatusDto,
            StatusFormSchema,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            any
        >
            listOfString="статусов"
            itemName="status"
            queryKey="all-statuses"
            tableHead={['Номер статуса', 'Название статуса']}
            formFields={(form) => <StatusFormFields form={form} />}
            defaultValues={STATUS_DEFAULT_VALUES}
            schema={statusFormSchema}
            getAll={getAllStatuses}
            getOne={getOneStatus}
            create={createStatus}
            update={updateStatus}
            remove={deleteStatus}
        />
    );
}

export default StatusPage;
