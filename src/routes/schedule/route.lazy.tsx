import { createLazyFileRoute } from "@tanstack/react-router";
import ClassSchedule from "../../components/Schedule/ClassSchedule";

export const Route = createLazyFileRoute("/schedule")({
  component: () => <ClassSchedule />,
});
