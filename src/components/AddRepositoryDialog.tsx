import { useState } from "react";
import { PlusIcon } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import useRepository from "../store/repository";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const AddRepositoryDialog = () => {
    const { addRepository } = useRepository();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [repoName, setRepoName] = useState<string>("");
    const [repoSize, setRepoSize] = useState<string>("");
    const [repoVisibility, setRepoVisibility] = useState<"Public" | "Private">("Private");
    const [repoTechnology, setRepoTechnology] = useState<string>("");

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <div className="p-2 flex text-sm items-center text-white bg-blue-600 rounded-md hover:bg-blue-700 cursor-pointer">
                    <PlusIcon className="h-5 w-5" />
                    Add Repository
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Repository</DialogTitle>
                    <DialogDescription>
                        Fill in the details below to create a repository.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Repository Name
                        </label>
                        <Input
                            id="name"
                            value={repoName}
                            onChange={(e) => setRepoName(e.target.value)}
                            placeholder="Enter repository name"
                            className="rounded-md"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="technology" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Technology
                        </label>
                        <Input
                            id="technology"
                            value={repoTechnology}
                            onChange={(e) => setRepoTechnology(e.target.value)}
                            placeholder="Enter Technology used"
                            className="rounded-md"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="size" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Size (KB)
                        </label>
                        <Input
                            id="size"
                            type="number"
                            value={repoSize}
                            onChange={(e) => setRepoSize(e.target.value)}
                            placeholder="Enter size in KB"
                            className="rounded-md"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="visibility" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Visibility
                        </label>
                        <Select
                            onValueChange={(value: "Public" | "Private") => setRepoVisibility(value)}
                            defaultValue={repoVisibility}
                        >
                            <SelectTrigger className="w-full rounded-md">
                                <SelectValue placeholder="Select visibility" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="Private">Private</SelectItem>
                                    <SelectItem value="Public">Public</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <DialogFooter>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                        onClick={() => {

                            if (!repoName || !repoTechnology || !repoSize) {
                                return
                            }
                            addRepository({
                                name: repoName,
                                technology: repoTechnology,
                                size: repoSize,
                                visibility: repoVisibility,
                                last_update: "updated 1 day ago"
                            })
                            setRepoName("");
                            setRepoSize("");
                            setRepoTechnology("");

                            setIsOpen(false);
                        }
                        }
                    >
                        Save
                    </button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default AddRepositoryDialog;