import { Outlet } from 'react-router';
import AppSidebar from './components/AppSidebar';
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar';
import Header from './components/Header';
import { Toaster } from './components/ui/sonner';

import { useEffect, useState } from 'react';
import LoginButton from './components/LoginButton';
import { toast } from 'sonner';
import { Button } from './components/ui/button';

function App() {
    const [open, setOpen] = useState(false);
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('user')) {
            setIsAuth(true);
        } else {
            setIsAuth(false);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setIsAuth(false);

        toast.success(`Вы вышли из системы`);
    };

    if (!isAuth) {
        return (
            <main className="w-full">
                <Header setIsAuth={setIsAuth}>
                    <div></div>

                    <LoginButton
                        open={open}
                        setIsAuth={setIsAuth}
                        setOpen={setOpen}
                    />
                </Header>

                <h2 className="text-lg text-center text-red-500">
                    Войдите в систему, чтобы продолжить
                </h2>
            </main>
        );
    }

    return (
        <SidebarProvider>
            <AppSidebar />

            <main className="w-full">
                <Header setIsAuth={setIsAuth}>
                    <SidebarTrigger />

                    <Button className="mr-2" onClick={handleLogout}>
                        Выйти
                    </Button>
                </Header>

                <div className="px-5">
                    <Outlet />
                </div>
            </main>

            <Toaster closeButton />
        </SidebarProvider>
    );
}

export default App;
