import { IMenu, IMenuComponentProps } from "#/components/menu";
import useWindowSize from "#/hooks/useWindowSize";
import { lazy, Suspense, useEffect, useRef, useState } from "react";

const MenuComponent = lazy(() => import("#/screens/cv/menu"));
const AboutMeComponent = lazy(() => import("#/screens/cv/aboutme"));
const MyServiceComponent = lazy(() => import("#/screens/cv/myService"));

function Screen() {
  const { WIDTH } = useWindowSize();
  const section1 = useRef<any>(null);
  const section2 = useRef<any>(null);

  const [menu, setMenu] = useState<IMenu>("ABOUT ME");

  const props: IMenuComponentProps = {
    WIDTH,
    menu,
    setMenu,
  };

  function handleChangeSection() {
    switch (menu) {
      case "ABOUT ME":
        section1.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "SERVICES":
        section2.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    handleChangeSection();
  }, [menu]);

  return (
    <div className="w-screen h-screen max-w-[1500px] bg-gray-50 overflow-auto m-auto">
      <Suspense fallback={<div />}>
        <MenuComponent {...props} />
      </Suspense>
      <div ref={section1} className="p-[50px] ml-[250px]">
        <Suspense fallback={<div />}>
          <AboutMeComponent />
        </Suspense>
      </div>
      <div ref={section2} className="p-[50px] ml-[250px]">
        <Suspense fallback={<div />}>
          <MyServiceComponent />
        </Suspense>
      </div>
    </div>
  );
}

export default Screen;
