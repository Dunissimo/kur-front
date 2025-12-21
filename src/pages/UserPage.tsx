import {
    createUser,
    deleteUser,
    getAllUsers,
    getUser,
    mapStageData,
} from '@/api/user';
import UserFormFields from '@/components/form/UserFormFields';
import PageTemplate from '@/components/PageTemplate';
import {
    USER_DEFAULT_VALUES,
    UserFormSchema,
    userFormSchema,
} from '@/lib/form-schemas/userSchema';
import { CreateUserDto, UpdateUserDto } from '@/lib/types';

function UserPage() {
    return (
        <PageTemplate<
            CreateUserDto,
            UpdateUserDto,
            UserFormSchema,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            any
        >
            listOfString="пользователей"
            itemName="user"
            queryKey="all-users"
            tableHead={['Номер пользователя', 'Имя', 'Логин']}
            defaultValues={USER_DEFAULT_VALUES}
            formFields={(form) => <UserFormFields form={form} />}
            schema={userFormSchema}
            getAll={getAllUsers}
            getOne={getUser}
            create={createUser}
            remove={deleteUser}
            mapDataToTableBody={mapStageData}
        />
    );
}

export default UserPage;
