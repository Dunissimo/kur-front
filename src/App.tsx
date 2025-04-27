import { Outlet } from 'react-router';
import AppSidebar from './components/AppSidebar';
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar';
import Header from './components/Header';
import { Toaster } from './components/ui/sonner';

function App() {
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
