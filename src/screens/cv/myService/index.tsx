import { Title } from "#/components/headers";
import { skillService } from "#/services/skill";

function MyService() {
  const skill = skillService();
  return (
    <div className=" min-h-[100vh]">
      <Title title="Services" subtitle="02" />
      <div className="my-[20px]">
        <h1 className="text-3xl font-titillium">
          Your One-Stop <strong>JavaScript Development Hub</strong>,
        </h1>
        <h2 className="inline-block font-titillium text-xl mt-2">
          We specialize in crafting high-performance digital solutions with modern JavaScript technologies.
        </h2>
        <br />
        <h2 className="inline-block font-titillium text-xl">
          Our services include:
        </h2>
      </div>
    </div>
  );
}

export default MyService;
