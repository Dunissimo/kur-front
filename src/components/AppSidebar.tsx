import {
    ArrowsUpFromLine,
    Briefcase,
    ChartNoAxesColumnDecreasing,
    Cpu,
    Factory,
    ShoppingCart,
} from 'lucide-react';
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from './ui/sidebar';
import { NavLink } from 'react-router';

const items = [
    {
        title: 'Процессы',
        url: 'process',
        icon: Cpu,
    },
    {
        title: 'Статусы',
        url: 'status',
        icon: ChartNoAxesColumnDecreasing,
    },
    {
        title: 'Этапы',
        url: 'stage',
        icon: ArrowsUpFromLine,
    },
    {
        title: 'Заказы',
        url: 'zakaz',
        icon: ShoppingCart,
    },
    {
        title: 'Цехи',
        url: 'workshop',
        icon: Briefcase,
    },
    {
        title: 'Продукция',
        url: 'product',
        icon: Factory,
    },
    {
        title: 'Этапы Продукции',
        url: 'product-stage',
        icon: Factory,
    },
];

function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Меню</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <NavLink
                                            to={item.url}
                                            className="sidebar-navLink"
                                        >
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </NavLink>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}

export default AppSidebar;
