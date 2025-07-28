import { Input } from "./ui/input";
import { RefreshCcw, DatabaseIcon, Search } from "lucide-react";
import useRepository from "../store/repository";
import AddRepositoryDialog from "./AddRepositoryDialog";
const DashBoard = () => {

    const { repositories } = useRepository();

    return (
        <>
            <div className="md:flex items-center justify-between p-4 border-b">
                <div className="flex flex-col gap-2">
                    <h1 className="text-xl">Repositories</h1>
                    <span className="text-sm text-gray-500">{repositories.length} total repositories</span>
                    <div className="relative w-full mt-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                        <Input
                            type="search"
                            placeholder="Search repositories..."
                            className="pl-10 pr-4 h-9 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>
                <div className="flex gap-x-3 mt-3 md:mt-0">
                    <button className="p-2 text-sm border rounded-md hover:bg-gray-50 flex items-center gap-2">
                        <RefreshCcw className="h-5 w-5" />
                        Refresh All
                    </button>
                    <AddRepositoryDialog />
                </div>
            </div>

            <div className="divide-y overflow-y-auto max-h-[calc(100vh-210px)]">
                {repositories.map((repo, index) => (
                    <div key={`repo-${index}`} className="p-4 hover:bg-gray-50">
                        <div className="flex items-center gap-2">
                            <h3 className="text-lg">{repo.name}</h3>
                            <span className="px-3 py-1 text-xs font-medium text-gray-600 bg-[#EFF8FF] border-[#B2DDFF] rounded-full">
                                {repo.visibility}
                            </span>
                        </div>
                        <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center gap-2">
                                {repo.technology}
                                <span className="w-2 h-2 bg-[#1570EF] rounded-full mr-2"></span>
                            </span>
                            <span className="flex items-center gap-1">
                                <DatabaseIcon className="w-[10.5px] h-3" />
                                {repo.size} KB
                            </span>
                            <span>{repo.last_update}</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default DashBoard;