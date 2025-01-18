import { Title } from "#/components/headers";
import { SkillComponent } from "#/components/skill";
import { skillService } from "#/services/skill";

function MyService() {
  const skill = skillService();
  return (
    <div>
      <Title title="Services" subtitle="02" />
      <div className="my-[20px]">
        <h1 className="text-xl font-titillium">
          Hello! I’m <strong>Erick Marlendo Noviyanto</strong>,
        </h1>
        <h2 className="inline-block font-titillium text-xl ">
          a passionate Fullstack
          <strong className="bg-gray-900 text-white px-[10px] pb-[2px] ml-[5px]">
            Javascrypt & Typescrypt Specialis
          </strong>
        </h2>
      </div>
      <div className="my-[20px]">
        <p className="font-light">
          With my refined coding skills, I can craft seamless{" "}
          <strong className="font-bold">Android </strong>apps,{" "}
          <strong className="font-bold">IOS</strong> apps,{" "}
          <strong className="font-bold">WEB</strong> apps,{" "}
          <strong className="font-bold">Chrome extensions</strong> apps,{" "}
          <strong className="font-bold">Backend API </strong>services,{" "}
          <strong className="font-bold">Desktop</strong> apps, and more. Let’s
          build something extraordinary together — your{" "}
          <strong className="font-bold">#SOLID</strong> partner in tech!
        </p>
      </div>
      <div className="my-[20px]">
        <p className="font-light">
          We promise that if you're not completely satisfied, you don’t pay.{" "}
          <strong className="font-bold">No risk, just results!</strong>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skill.map((item, index) => (
          <SkillComponent
            key={`skill-${index}`}
            name={item.name}
            value={item.value}
          />
        ))}
      </div>
    </div>
  );
}

export default MyService;
