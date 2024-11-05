import { useEffect, useState } from "react";
import LandingHeader from "../LandingHeader";
import { ClassDays, validClassDays } from "../../routes/schedule/route";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { Link, Tab, TabList, TabPanel, Tabs } from "react-aria-components";
import { classDictionary } from "../../utils/allClasses";
import upperFirstLetters from "../../utils/upperFirstLetters";
import { endWeek, startWeek } from "../../utils/time";

//visually sets a border around the day tab to denote the current day
const currentDay = validClassDays[new Date().getDay()];
function ClassSchedule() {
  //day of week specifies the default day to automatically load in schedule
  const dayOfWeek = useSearch({ from: "/schedule" });
  const [classDay, setClassDay] = useState<ClassDays>(
    dayOfWeek.day || "sunday"
  );
  const navigate = useNavigate();

  useEffect(() => {
    navigate({ to: ".", search: { day: classDay } });
  }, [classDay]);

  return (
    <section>
      <LandingHeader text="Schedule" />
      <div className="pt-20 pb-40 px-4 md:px-10 lg:px-32 max-w-[2000px] mx-auto">
        <p className="font-bold text-center text-xl xs:text-2xl md:text-3xl py-10">
          Enroll in sessions by day
        </p>
        <p className="text-xl pb-6 text-center">
          Week of: {startWeek} - {endWeek}
        </p>
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
                    `px-3 py-2 text-center rounded-full outline-none ${day === currentDay ? "border" : ""} ${isSelected ? "bg-red-primary font-bold text-white" : isFocusVisible || isHovered ? "bg-gray-200 cursor-pointer" : ""}`
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
                      <div className="join px-4 flex justify-center items-center">
                        <Link
                          className={
                            "inline-flex border rounded-full px-6 py-2 bg-gray-primary text-white hover:bg-red-primary focus-visible:bg-red-primary transition-all duration-300 cursor-pointer outline-none border-none"
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
