import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

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

type SearchParams = {
  day?: ClassDays;
};
export const Route = createFileRoute("/schedule")({
  validateSearch: (search: Record<string, unknown>): SearchParams => {
    return {
      day: classDaySchema.safeParse(search?.day).success
        ? (search.day as ClassDays)
        : (validClassDays[new Date().getDay()] as ClassDays),
    };
  },
});
