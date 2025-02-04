import React, { useState, useCallback } from 'react';
import { Link } from 'gatsby';
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { selectUser } from "@/features/user/selectors/selectUser";
import AuthDialog from "@/components/AuthDialog/AuthDialog";
import { ReactComponent as Logo } from "@/images/Logo.svg";
import { ReactComponent as DefaultProfile } from "@/images/DefaultProfile.svg";

interface AuthItem {
    label: string;
    tabName: 'LogIn' | 'Register';
}

const Header: React.FC = () => {
    const MENU_ITEMS = ['Home', 'About', 'Services', 'Blog', 'Contact', 'Portfolio'];
    const AUTH_ITEMS: AuthItem[] = [{ label: "Log in", tabName: "LogIn" }, { label: "Sign up", tabName: "Register" }];

    const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<'LogIn' | 'Register'>('LogIn');

    const user = useSelector(selectUser);

    const handleAuthClick = useCallback((tabName: 'LogIn' | 'Register') => {
        setActiveTab(tabName);
        setIsAuthDialogOpen(true);
    }, []);

    return (
        <header className="p-4 flex items-center justify-between w-full px-[5%]">
            <div className="flex items-center">
                <Logo className="w-25" />
            </div>

            <nav className="flex-1 flex justify-center space-x-6">
                {MENU_ITEMS.map((item) => (
                    <Button key={item} className="bg-transparent text-black hover:text-gray-500 hover:bg-transparent">
                        <Link to={`/${item.toLowerCase()}`} aria-label={`Go to ${item}`}>
                            {item}
                        </Link>
                    </Button>
                ))}
            </nav>

            {user ? (
                <div className="flex items-center">
                    <DefaultProfile className="w-8 h-8" />
                    <p className="font-source-sans-pro text-sm font-semibold ml-2">{user?.username}</p>
                </div>
            ) : (
                <div className="flex items-center space-x-4">
                    {AUTH_ITEMS.map((item, index) => (
                        <React.Fragment key={item.tabName}>
                            <Button
                                variant="default"
                                className="bg-transparent text-black underline hover:text-gray-500 hover:bg-transparent w-[4%]"
                                onClick={() => handleAuthClick(item.tabName)}
                            >
                                {item.label}
                            </Button>
                            {index < AUTH_ITEMS.length - 1 && <div className="border-l border-black h-6" />}
                        </React.Fragment>
                    ))}
                </div>
            )}

            <AuthDialog open={isAuthDialogOpen} setOpen={setIsAuthDialogOpen} activeTab={activeTab} setActiveTab={setActiveTab} />
        </header>
    );
};

export default Header;
