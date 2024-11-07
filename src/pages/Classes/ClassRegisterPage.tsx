import { useSearch } from "@tanstack/react-router";
import LandingHeader from "../../components/LandingHeader";
import ClassRegisterForm from "../../components/Classes/ClassRegisterForm";

function ClassRegisterPage() {
  const searchDeps = useSearch({ from: "/classes/register" });
  const classId = searchDeps.classId;
  return (
    <section>
      <LandingHeader text="Class Registration" />
      <div className="content px-4 md:px-10 lg:px-[--page-padding] pt-20 mb-40">
        <ClassRegisterForm defaultSelectedClassId={classId} />
      </div>
    </section>
  );
}

export default ClassRegisterPage;
