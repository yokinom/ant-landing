import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select"

const RepoSelect = () => {
    return (
        <div className="px-4 mb-4 w-full border-[#D5D7DA] rounded-md">
            <Select>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Repository" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Projects</SelectLabel>
                        <SelectItem value="project1">Project One</SelectItem>
                        <SelectItem value="project2">Project Two</SelectItem>
                        <SelectItem value="project3">Project Three</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>

    )
}

export default RepoSelect;