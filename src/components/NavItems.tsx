import { Link } from "react-router-dom";
import { BookText, Cloud, CodeXml, House, LogOut, Phone, Settings } from "lucide-react"

import { useLocation } from "react-router-dom";

type NavItemsProps = {
    isOpen: boolean
}

export const NavItems = ({ isOpen }: NavItemsProps) => {
    const location = useLocation();
    return (
        <>
            <nav className="flex-1">
                <ul className="space-y-2 px-3">
                    <li className="hover:bg-gray-100 rounded-md">
                        <Link to="/repositories" className={`flex items-center p-2 text-gray-700 rounded-md ${location.pathname === '/repositories' ? 'bg-blue-500' : null}`}>
                            <span className="flex gap-2">
                                <House className="h-6 w-6" />
                                Repositories
                            </span>
                        </Link>
                    </li>
                    <li className="hover:bg-gray-100 rounded-md">
                        <Link to="/ai-review" className={`flex items-center p-2 text-gray-700 rounded-md ${location.pathname === '/review' ? 'bg-blue-500' : null}`}>
                            <span className="flex gap-2">
                                <CodeXml className="h-6 w-6" />
                                AI Code Review
                            </span>
                        </Link>
                    </li>
                    <li className="hover:bg-gray-100 rounded-md">
                        <Link to="/security" className={`flex items-center p-2 text-gray-700 rounded-md ${location.pathname === '/security' ? 'bg-blue-500' : null}`}>
                            <span className="flex gap-2">
                                <Cloud className="h-6 w-6" />
                                Code Security
                            </span>
                        </Link>
                    </li>
                    <li className="hover:bg-gray-100 rounded-md">
                        <Link to="/usages" className={`flex items-center p-2 text-gray-700 rounded-md ${location.pathname === '/usages' ? 'bg-blue-500' : null}`}>
                            <span className="flex gap-2">
                                <BookText className="h-6 w-6" />
                                How to Use
                            </span>
                        </Link>
                    </li>
                    <li className="hover:bg-gray-100 rounded-md">
                        <Link to="/settings" className={`flex items-center p-2 text-gray-700 rounded-md ${location.pathname === '/settings' ? 'bg-blue-500' : null}`}>
                            <span className="flex gap-2"><Settings className="h-6 w-6" />Settings</span>
                        </Link>
                    </li>
                    {
                        isOpen ? (
                            <>
                                <li className="hover:bg-gray-100 rounded-md">
                                    <Link to="/settings" className="flex items-center p-2 text-gray-700">
                                        <span className="flex gap-2"><Phone className="h-6 w-6" />Support</span>
                                    </Link>
                                </li>
                                <li className="hover:bg-gray-100 rounded-md">
                                    <Link to="/settings" className="flex items-center p-2 mb-2 text-gray-700">
                                        <span className="flex gap-2"><LogOut className="h-6 w-6" />Logout</span>
                                    </Link>
                                </li>
                            </>
                        )
                            : null
                    }
                </ul>
            </nav>

            {!isOpen ?
                <div className="fixed bottom-0 left-0 p-4 space-y-2 bg-white">
                    <button className="flex gap-2 w-full text-left p-2 text-gray-700 hover:bg-gray-100 rounded-md">
                        <Phone className="h-6 w-6" />
                        Support
                    </button>
                    <button className="flex gap-2 w-full text-left p-2 text-gray-700 hover:bg-red-50 rounded-md">
                        <LogOut className="h-6 w-6" />
                        Logout
                    </button>
                </div>
                : null}
        </>
    )
}

export default NavItems;