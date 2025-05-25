import { Title } from "#/components/headers";
import { IPortfilioList, portfolioService } from "#/services/portfolio";
import { useEffect, useState } from "react";

function Portfolio() {
  const images: any = portfolioService();
  const [state, setState] = useState<IPortfilioList[]>(images);

  function filterImages(type: 'Show All' | 'Mobile Apps' | 'Web Apps') {
    if (type === 'Mobile Apps') {
      const filteredImages = [];
    }
    setState(images);
  }

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <div className=" min-h-[100vh]">
      <Title title="Portfolio" subtitle="03" tabs={['Show All', 'Mobile Apps', 'Web Apps']} tabsOnChange={(value: any) => {
        filterImages(value);
      }} />
      <div>

      </div>
    </div>
  );
}

export default Portfolio;
