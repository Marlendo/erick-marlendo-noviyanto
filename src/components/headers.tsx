import { ButtonGroup } from "./buttonGroup";

export function Title({
  title,
  subtitle,
  tabs = [],
  tabsOnChange = (e) => console.log(e)
}: {
  title: string;
  subtitle: string;
  tabs?: string[];
  tabsOnChange?: (e: string) => void;
}) {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-1 flex-col">
        <p className="font-titillium text-4xl font-light text-emerald-900">
          <small className="mr-[10px] text-base">{subtitle}</small>
          {title}
        </p>
        <div className="h-[2px] w-[40px] bg-emerald-900 ml-[30px] mt-[5px]" />
      </div>
      {
        tabs.length > 0 ? (
          <ButtonGroup items={tabs} onChange={tabsOnChange} />
        ) : null
      }
    </div>
  );
}
