import { createFileRoute } from "@tanstack/react-router";
import ClassSchedule from "../../components/Schedule/ClassSchedule";
import { z } from "zod";
import { getCurrentWeek } from "../../utils/time";

export const validClassDays = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
] as const;

const classDaySchema = z.enum(validClassDays);
export type ClassDays = z.infer<typeof classDaySchema>;

type ScheduleSearchParams = {
  week: number;
  day?: ClassDays;
};

export const Route = createFileRoute("/schedule/")({
  component: () => <ClassSchedule />,
  validateSearch: (search: Record<string, unknown>): ScheduleSearchParams => {
    const currentWeek = getCurrentWeek();
    const parsedWeek = Number(search?.week || 0);
    return {
      week:
        parsedWeek > currentWeek + 1
          ? getCurrentWeek()
          : parsedWeek < currentWeek
            ? getCurrentWeek()
            : parsedWeek,
      day: classDaySchema.safeParse(search?.day).success
        ? (search.day as ClassDays)
        : (validClassDays[new Date().getDay()] as ClassDays),
    };
  },
});
