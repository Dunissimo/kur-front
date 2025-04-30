import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    LOGIN_DEFAULT_VALUES,
    LoginFormSchema,
    loginFormSchema,
} from '@/lib/form-schemas/loginFormSchemas';
import { useMutation } from '@tanstack/react-query';
import TextInputField from './TextInputField';
import { signIn } from '@/api/auth';
import { toast } from 'sonner';

interface LoginFormProps {
    setOpen: (value: boolean) => void;
    setIsAuth: (value: boolean) => void;
}

function LoginForm({ setOpen, setIsAuth }: LoginFormProps) {
    const form = useForm({
        resolver: zodResolver(loginFormSchema),
        mode: 'onChange',
        defaultValues: LOGIN_DEFAULT_VALUES,
    });

    const login = useMutation({
        mutationFn: (data: LoginFormSchema) => signIn(data),
        onSuccess: (data) => {
            setOpen(false);

            localStorage.setItem('user', JSON.stringify(data));
            setIsAuth(true);

            toast.success(`Вы вошли в систему`);
        },
        onError(error) {
            if (error.message.includes('401')) {
                toast.error('Неправильное имя или пароль');
            }
        },
    });

    const onSubmit = async (values: LoginFormSchema) => {
        login.mutate(values);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <TextInputField
                    name="username"
                    label="Имя пользователя"
                    control={form.control}
                />

                <TextInputField
                    name="password"
                    label="Пароль"
                    control={form.control}
                />

                <Button type="submit" className="w-full">
                    Войти
                </Button>
            </form>
        </Form>
    );
}

export default LoginForm;
