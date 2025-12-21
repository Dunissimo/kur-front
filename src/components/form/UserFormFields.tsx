import { UseFormReturn } from 'react-hook-form';
import TextInputField from './TextInputField';
import { UserFormSchema } from '@/lib/form-schemas/userSchema';

interface UserFormFieldsProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    form: UseFormReturn<UserFormSchema, any>;
}

function UserFormFields({ form }: UserFormFieldsProps) {
    return (
        <>
            <TextInputField
                name="name"
                label="Имя пользователя"
                control={form.control}
            />
            <TextInputField
                name="login"
                label="Имя пользователя"
                control={form.control}
            />
            <TextInputField
                name="password"
                label="Пароль"
                control={form.control}
            />
        </>
    );
}

export default UserFormFields;
