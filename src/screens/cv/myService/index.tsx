import { Title } from "#/components/headers";
import { serviceService } from "#/services/services";

function MyService() {
  const services = serviceService();
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
      <div className="my-[20px]">
        {
          services.map((item, index) => (
            <div key={`service-${index}`} className="my-[50px]">
              <div className="flex flex-row justify-start items-center">
                <div dangerouslySetInnerHTML={{ __html: item.icon }} className="w-[100px] mr-[20px]" />
                <div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-sm">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default MyService;
