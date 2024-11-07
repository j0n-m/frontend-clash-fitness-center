import { useCallback, useEffect, useMemo, useState } from "react";
import LandingHeader from "../LandingHeader";
import { useNavigate, useSearch } from "@tanstack/react-router";
import {
  Button,
  Link,
  Tab,
  TabList,
  TabPanel,
  Tabs,
} from "react-aria-components";
import { classDictionary } from "../../utils/allClasses";
import upperFirstLetters from "../../utils/upperFirstLetters";
import {
  getCurrentWeek,
  getWeekDatesFromWeekDay,
  isClassAvailable,
} from "../../utils/time";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { ClassDays, validClassDays } from "../../routes/schedule";

//visually sets a border around the day tab to denote the current day
function ClassSchedule() {
  const currentWeek = getCurrentWeek();
  //day of week specifies the default day to automatically load in schedule
  const currentDay = useMemo(() => validClassDays[new Date().getDay()], []);
  const dayOfWeek = useSearch({ from: "/schedule/" });
  const [classDay, setClassDay] = useState<ClassDays>(
    dayOfWeek.day || "sunday"
  );

  const [week, setWeek] = useState<number>(dayOfWeek.week);
  const navigate = useNavigate();
  const { startWeek, endWeek } = getWeekDatesFromWeekDay(week);

  const isClassJoinable = useCallback(
    (week: number, day: string, classDate: Date) => {
      return isClassAvailable(week, day, classDate);
    },
    []
  );

  useEffect(() => {
    navigate({
      to: ".",
      search: { day: classDay, week: week },
    });
  }, [classDay, week]);

  return (
    <section>
      <LandingHeader text="Schedule" />
      <div className="pt-20 pb-40 px-4 md:px-10 lg:px-32 max-w-[2000px] mx-auto">
        <p className="font-bold text-center text-xl xs:text-2xl md:text-3xl py-10">
          Enroll by sessions
        </p>
        <div className="flex justify-center items-center pb-6 gap-4">
          {week <= currentWeek ? (
            <div className="size-8"></div>
          ) : (
            <Button
              onPress={() => setWeek(week - 1)}
              className={({ isPressed, isFocusVisible }) =>
                `${week === currentWeek && "hidden"} rounded-full p-1 ${isPressed ? "bg-gray-200" : isFocusVisible ? "border border-blue-600" : ""}`
              }
            >
              <ChevronLeftIcon className="size-6" />
            </Button>
          )}
          <p className="text-xl text-center">
            <Button className={``} onPress={() => setWeek(currentWeek)}>
              Week of: {startWeek} - {endWeek}
            </Button>
          </p>
          {week >= currentWeek + 1 ? (
            <div className="size-8"></div>
          ) : (
            <Button
              onPress={() => setWeek(week + 1)}
              className={({ isPressed, isFocusVisible }) =>
                `rounded-full p-1 ${week === currentWeek + 1 ? "hidden" : ""} ${isPressed ? "bg-gray-200" : isFocusVisible ? "border border-blue-600" : ""}`
              }
            >
              <ChevronRightIcon className="size-6" />
            </Button>
          )}
        </div>
        <Tabs
          selectedKey={classDay}
          onSelectionChange={(key) => {
            setClassDay(key as ClassDays);
          }}
        >
          <TabList
            aria-label="Class Days"
            className={`flex flex-wrap justify-center gap-5`}
          >
            {validClassDays.map((day, index) => {
              return (
                <Tab
                  key={index}
                  id={day}
                  className={({ isFocusVisible, isHovered, isSelected }) =>
                    `px-4 py-2 text-center rounded-full outline-none ${day === currentDay && week === currentWeek ? "border" : ""} ${isSelected ? "bg-red-primary font-bold text-white" : isFocusVisible || isHovered ? "bg-gray-200 cursor-pointer" : ""}`
                  }
                >
                  {upperFirstLetters(day)}
                </Tab>
              );
            })}
          </TabList>
          {validClassDays.map((day, index) => {
            return (
              <TabPanel key={index} id={day}>
                <div className="flex flex-col gap-2 my-8">
                  <p className="text-gray-500 text-sm">
                    *Must be enrolled 24 hours ahead of the class start time
                  </p>

                  {classDictionary[day]?.map((classes, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-1 grid-rows-4 gap-4 md:gap-0 md:grid-rows-none md:grid-cols-[1fr,1fr,1fr,max-content] bg-gray-100 px-4 py-8 md:py-4 place-content-center rounded-lg"
                    >
                      <div className="name">
                        <p className="text-sm text-gray-600 text-center">
                          Class
                        </p>
                        <p className="text-center font-bold">{classes.label}</p>
                      </div>
                      <div className="time text-center">
                        <p className="text-sm text-gray-600">Time</p>
                        <p>{classes.time}</p>
                      </div>
                      <div className="instructor text-center">
                        <p className="text-sm text-gray-600">Instructor</p>
                        <p>{classes.instructor.name}</p>
                      </div>
                      <div className="join px-4 flex justify-center items-center text-white">
                        <Link
                          isDisabled={isClassJoinable(
                            week,
                            day,
                            classes.dateFormat
                          )}
                          href="/classes/register"
                          routerOptions={{ search: { classId: classes.id } }}
                          className={({
                            isDisabled,
                            isHovered,
                            isPressed,
                            isFocusVisible,
                          }) =>
                            `inline-flex border rounded-full px-6 py-2 ${isDisabled ? "text-gray-400 cursor-not-allowed" : isHovered || isFocusVisible || isPressed ? "hover:bg-red-primary" : ""} bg-gray-primary transition-all duration-300 cursor-pointer outline-none border-none`
                          }
                        >
                          Join
                        </Link>
                      </div>
                    </div>
                  ))}
                  {!classDictionary[day] && (
                    <p className="text-center text-gray-600 pt-4 pb-10">
                      No classes are available for {day}.
                    </p>
                  )}
                </div>
              </TabPanel>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}

export default ClassSchedule;
