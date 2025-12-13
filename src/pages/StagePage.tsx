import {
    createStage,
    deleteStage,
    getAllStages,
    getOneStage,
    mapStageData,
    updateStage,
} from '@/api/stage';
import {
    STAGE_DEFAULT_VALUES,
    stageFormSchema,
    StageFormSchema,
} from '@/lib/form-schemas/stageFormSchemas';
import { CreateStageDto, UpdateStageDto } from '@/lib/types';
import PageTemplate from '@/components/PageTemplate';
import StageFormFields from '@/components/form/StageFormFields';

function StagePage() {
    return (
        <PageTemplate<
            CreateStageDto,
            UpdateStageDto,
            StageFormSchema,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            any
        >
            listOfString="этапов"
            itemName="stage"
            queryKey="all-stages"
            tableHead={['Номер этапа', 'Название этапа', 'Описание', 'Цех']}
            formFields={(form) => <StageFormFields form={form} />}
            defaultValues={STAGE_DEFAULT_VALUES}
            schema={stageFormSchema}
            getAll={getAllStages}
            getOne={getOneStage}
            create={createStage}
            update={updateStage}
            remove={deleteStage}
            mapDataToTableBody={mapStageData}
        />
    );
}

export default StagePage;
