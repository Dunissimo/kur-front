import {
    createWorkshop,
    deleteWorkshop,
    getAllWorkshops,
    getOneWorkshop,
    updateWorkshop,
} from '@/api/workshop';
import PageTemplate from '@/components/PageTemplate';
import { CreateWorkshopDto, UpdateWorkshopDto } from '@/lib/types';
import {
    WORKSHOP_DEFAULT_VALUES,
    workshopFormSchema,
    WorkshopFormSchema,
} from '@/lib/form-schemas/WorkshopFormSchemas';
import WorkshopFormFields from '@/components/form/WorkshopFormFields';

function WorkshopPage() {
    return (
        <div>
            <PageTemplate<
                CreateWorkshopDto,
                UpdateWorkshopDto,
                WorkshopFormSchema,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                any
            >
                listOfString="цехов"
                itemName="workshop"
                queryKey="all-workshops"
                tableHead={['Номер цеха', 'Название цеха']}
                formFields={(form) => <WorkshopFormFields form={form} />}
                defaultValues={WORKSHOP_DEFAULT_VALUES}
                schema={workshopFormSchema}
                getAll={getAllWorkshops}
                getOne={getOneWorkshop}
                create={createWorkshop}
                update={updateWorkshop}
                remove={deleteWorkshop}
            />
        </div>
    );
}

export default WorkshopPage;
