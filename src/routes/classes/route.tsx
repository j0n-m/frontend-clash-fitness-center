import { createFileRoute } from "@tanstack/react-router";
import ClassesPage from "../../pages/Classes/ClassesPage";

export const Route = createFileRoute("/classes")({
  component: () => <ClassesPage />,
});
