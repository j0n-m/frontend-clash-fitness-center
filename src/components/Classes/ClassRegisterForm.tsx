import { useEffect, useState } from "react";
import allClasses, { allClassesMap } from "../../utils/allClasses";
import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from "react-aria-components";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { getAvailableDateFromClassDate } from "../../utils/time";
import { useNavigate } from "@tanstack/react-router";

type ClassRegisterFormProps = {
  defaultSelectedClassId: number;
};

type Key = number;

function ClassRegisterForm({ defaultSelectedClassId }: ClassRegisterFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [classList] = useState(allClasses);
  const [selectedClass, setSelectedClass] = useState<Key>(
    defaultSelectedClassId
  );
  const [error, setError] = useState<{ [index: string]: string } | undefined>(
    undefined
  );
  const [formIsValidated, setFormIsValidated] = useState(false);
  const classObj = allClassesMap.get(selectedClass);
  const navigate = useNavigate();

  const classAvailableDate = getAvailableDateFromClassDate(
    classObj?.dateFormat || new Date("01-01-1990 00:00")
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValidated = () => {
      if (!classObj) {
        return false;
      }
      if (name.trim().length < 2) {
        setError({ name: "Name must be at least 2 characters long" });
        return false;
      }
      setName(name.trim());
      setEmail(email.trim());

      return true;
    };

    if (isValidated()) {
      console.log("form submitted");
      setFormIsValidated(true);
    }
  };

  useEffect(() => {
    navigate({ to: "/classes/register", search: { classId: selectedClass } });
  }, [selectedClass]);

  return (
    <form
      onSubmit={handleSubmit}
      className="border max-w-[600px] mx-auto p-10 shadow-lg"
    >
      <h2 className="pb-6 text-2xl font-bold">Register for a class</h2>
      <div className="form-input-container flex flex-col gap-6">
        <div className="input-fields flex flex-col gap-2">
          <label htmlFor="name">Full Name</label>
          <input
            className="outline outline-gray-300 rounded-md h-[40px] px-3 focus-visible:outline-gray-500 outline-2 hover:outline-gray-400 transition-all duration-300"
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Joe Doe"
            required={true}
            value={name}
            onChange={(e) => {
              if (error?.name) {
                setError(undefined);
              }
              setName(e.target.value);
            }}
          />
          <p className="text-red-600">{error?.name ? error.name : null}</p>
        </div>
        <div className="input-fields flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            className="outline outline-gray-300 rounded-md h-[40px] px-3 focus-visible:outline-gray-500 outline-2 hover:outline-gray-400 transition-all duration-300"
            type="email"
            required={true}
            id="email"
            placeholder="e.g. doe@example.com"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-fields flex flex-col gap-2">
          <Select
            selectedKey={selectedClass}
            onSelectionChange={(key) => {
              setSelectedClass(+key);
            }}
            className={"flex flex-col md:flex-row md:items-center gap-3"}
          >
            <Label>Select a class:</Label>
            <Button
              className={({ isFocusVisible, isHovered, isPressed }) =>
                `flex gap-1 transition-all duration-300 items-center h-[38px] px-3 border border-gray-300 ${isFocusVisible ? "border-1 border-blue-700" : isHovered || isPressed ? "bg-gray-100 border-gray-100" : ""}`
              }
            >
              <SelectValue />
              <span aria-hidden="true">
                <ChevronDownIcon className="size-4" />
              </span>
            </Button>
            <Popover>
              <ListBox
                items={classList}
                className={"bg-white shadow-2xl border-none outline-none"}
              >
                {(item) => (
                  <ListBoxItem
                    key={item.id}
                    id={item.id}
                    textValue={item.label}
                    className={({
                      isFocusVisible,
                      isSelected,
                      isHovered,
                      isPressed,
                    }) =>
                      ` px-4 py-1 ${isSelected ? "bg-gray-200 text-gray-600" : isHovered || isPressed || isFocusVisible ? "bg-gray-100 cursor-pointer" : ""}`
                    }
                  >
                    {item.label}
                  </ListBoxItem>
                )}
              </ListBox>
            </Popover>
          </Select>
        </div>
        {classObj && (
          <div className="class-details border-t py-3 flex flex-col gap-2">
            <p>Instructor: {classObj.instructor.name}</p>
            <p>Date: {classAvailableDate}</p>
            <p>Time: {classObj.time.split(" ").slice(1).join(" ")}</p>
          </div>
        )}
        {classObj && (
          <div className="text-white">
            <Button
              isDisabled={formIsValidated}
              type="submit"
              className={({
                isHovered,
                isPressed,
                isFocusVisible,
                isDisabled,
              }) =>
                `px-6 py-2 inline-block transition-all duration-300 font-bold ${isFocusVisible ? "border-2 border-blue-600" : ""} ${isHovered || isPressed ? "bg-red-primary/85" : isDisabled ? "bg-gray-primary text-gray-200" : "bg-red-primary"}`
              }
            >
              Register
            </Button>
          </div>
        )}
      </div>
    </form>
  );
}

export default ClassRegisterForm;
