import { Outlet } from 'react-router';
import AppSidebar from './components/AppSidebar';
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar';
import Header from './components/Header';
import { Toaster } from './components/ui/sonner';

import { useEffect, useState } from 'react';
import LoginButton from './components/LoginButton';

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

    if (!isAuth) {
        return (
            <main className="w-full">
                <Header>
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
                <Header>
                    <SidebarTrigger />
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
