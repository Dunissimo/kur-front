import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import LoginForm from './form/LoginForm';

interface LoginButtonProps {
    open: boolean;
    setOpen: (value: boolean) => void;
    setIsAuth: (value: boolean) => void;
}

function LoginButton({ open, setOpen, setIsAuth }: LoginButtonProps) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="secondary" className="mr-2">
                    Войти
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle className="text-center">Вход</DialogTitle>
                <DialogDescription />
                <LoginForm setIsAuth={setIsAuth} setOpen={setOpen} />
            </DialogContent>
        </Dialog>
    );
}

export default LoginButton;
