import {
    createPodship,
    deletePodship,
    getAllPodships,
    getOnePodship,
    mapPodshipData,
    updatePodship,
} from '@/api/podship';
import PodshipFormFields from '@/components/form/PodshipFormFields';
import PageTemplate from '@/components/PageTemplate';
import {
    PODSHIP_DEFAULT_VALUES,
    podshipFormSchema,
    PodshipFormSchema,
} from '@/lib/form-schemas/podshipFormSchemas';
import { CreatePodshipDto, UpdatePodshipDto } from '@/lib/types';

function PodshipPage() {
    return (
        <div>
            <PageTemplate<
                CreatePodshipDto,
                UpdatePodshipDto,
                PodshipFormSchema,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                any
            >
                listOfString="подшипников"
                itemName="podship"
                queryKey="all-podships"
                tableHead={[
                    'Номер подшипника',
                    'Название подшипника',
                    'Название цеха',
                ]}
                formFields={(form) => <PodshipFormFields form={form} />}
                defaultValues={PODSHIP_DEFAULT_VALUES}
                schema={podshipFormSchema}
                getAll={getAllPodships}
                getOne={getOnePodship}
                create={createPodship}
                update={updatePodship}
                remove={deletePodship}
                mapDataToTableBody={mapPodshipData}
            />
        </div>
    );
}

export default PodshipPage;
