import { AlignJustify, X } from "lucide-react";
import antAILogo from "../assets/ant-ui-small.svg";

import NavItems from "./NavItems";
import RepoSelect from "./RepoSelect";

import { useState } from "react";
const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="flex items-center gap-2 px-5 py-6">
                <img src={antAILogo} alt="Ant AI Logo" className="w-8 h-8" />
                <span className="text-2xl font-sans">CodeAnt AI</span>
            </div>

            <RepoSelect />

            <NavItems isOpen={false} />

            <div className="md:hidden flex justify-between items-center p-4 border-b">
                <div className="flex gap-2">
                    <img src={antAILogo} alt="" className="h-6 w-6" />
                    <h1 className="text-xl font-bold">CodeAnt AI</h1>
                </div>
                <button className="p-2" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <AlignJustify />}
                </button>
            </div>

            {
                isOpen && (
                    <div className="md:hidden absolute top-14 mt-3 left-0 right-0 bg-white z-50 border-b shadow-lg">
                        <RepoSelect />
                        <NavItems isOpen={isOpen} />
                    </div>
                )
            }
        </>
    )

}

export default SideBar;