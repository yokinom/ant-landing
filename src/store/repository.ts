import { create } from "zustand";

type Repository = {
  name: string;
  technology: string;
  visibility: "Public" | "Private";
  size: string;
  last_update: string; // TODO: replace with datetime
};

const repositories: Array<Repository> = [
  {
    name: "design-system",
    technology: "React",
    visibility: "Public",
    size: "7320",
    last_update: "Updated 1 day ago",
  },
  {
    name: "codeant-ci-app",
    technology: "Javascript",
    visibility: "Private",
    size: "5871",
    last_update: "Updated 2 day ago",
  },
  {
    name: "analytics-dashboard",
    technology: "Python",
    visibility: "Public",
    size: "7320",
    last_update: "Updated 5 day ago",
  },
  {
    name: "mobile-app",
    technology: "swift",
    visibility: "Public",
    size: "3096",
    last_update: "Updated 3 day ago",
  },
  {
    name: "e-commerce-platform",
    technology: "Java",
    visibility: "Private",
    size: "6210",
    last_update: "Updated 6 day ago",
  },
  {
    name: "blog-website",
    technology: "HTML/CSS",
    visibility: "Public",
    size: "1876",
    last_update: "Updated 4 day ago",
  },
  {
    name: "social-network",
    technology: "PHP",
    visibility: "Private",
    size: "5432",
    last_update: "Updated 7 day ago",
  },
];

// interface
interface RepositoryAction {
  repositories: Array<Repository>;
  addRepository: (repository: Repository) => void;
  // TODO: Edit And Delete
}

// actual store action
const useRepository = create<RepositoryAction>((set) => ({
  repositories: [...repositories],
  addRepository: (repository) =>
    set((state) => ({ repositories: [repository, ...state.repositories] })),
}));

export default useRepository;
