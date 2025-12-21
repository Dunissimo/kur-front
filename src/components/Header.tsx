interface HeaderProps {
    children?: React.ReactNode;
    setIsAuth: (value: boolean) => void;
}

function Header({ children }: HeaderProps) {
    return (
        <header className="w-full h-14 mb-5 flex justify-between items-center px-3 bg-[#0f172a]">
            {children}
        </header>
    );
}

export default Header;
