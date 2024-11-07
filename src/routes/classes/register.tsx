import { createFileRoute } from "@tanstack/react-router";
import ClassRegisterPage from "../../pages/Classes/ClassRegisterPage";

type ClassRegisterRouteParam = {
  classId: number;
};
export const Route = createFileRoute("/classes/register")({
  component: () => <ClassRegisterPage />,
  validateSearch: (
    search: Record<string, unknown>
  ): ClassRegisterRouteParam => {
    const idParam = Number(search.classId || 0);
    return {
      classId: idParam < 0 ? 0 : idParam,
    };
  },
});
