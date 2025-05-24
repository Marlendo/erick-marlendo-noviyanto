import Erick from "#/assets/erick.png";

export type IMenu =
  | "ABOUT ME"
  | "SERVICES"
  | "PORTFOLIO"
  | "RESUME"
  | "DOWNLOAD NOW";

export interface IMenuComponentProps {
  WIDTH: number;
  menu: IMenu;
  setMenu: (e: IMenu) => void;
}

function MenuList({ menu, setMenu }: IMenuComponentProps) {
  const menuList: IMenu[] = [
    "ABOUT ME",
    "SERVICES",
    "PORTFOLIO",
    "RESUME",
    "DOWNLOAD NOW",
  ];

  return menuList.map((item, index) => (
    <div
      key={`menu-${index}`}
      className="p-[10px] cursor-pointer"
      onClick={() => {
        setMenu(item);
      }}
    >
      <p
        className={`${
          menu === item ? "text-emerald-900 text-sm" : "text-gray-700 text-xs"
        } text-center font-bold`}
      >
        {item}
      </p>
    </div>
  ));
}

export function MenuComponent(props: IMenuComponentProps) {
  return (
    <div
      className="fixed flex flex-col justify-start items-center w-[200px] h-screen bg-emerald-900 shadow-[0px_0px_10px_1px_rgba(0,0,0,0.8)]"
      style={{
        left: props.WIDTH < 1500 ? "50px" : props.WIDTH / 2 - 700,
      }}
    >
      <img
        src={Erick}
        alt="erick-marlendo-noviyanto"
        className="w-[130px] h-[130px] object-cover object-top rounded-full my-[20px]"
      />
      <h1 className="text-white font-bold text-center text-2xl">
        Erick Marlendo Noviyanto
      </h1>
      <div className="relative bg-white p-[20px] w-full my-[20px]">
        <div className="absolute -rotate-90 bottom-[100px] left-[-100px]">
          <h1 className="text-emerald-900 tracking-widest">
            +628 122 8304 044
          </h1>
        </div>
        <MenuList {...props} />
      </div>
    </div>
  );
}
