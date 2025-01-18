export function SkillComponent({
  name,
  value,
}: {
  name: string;
  value: number;
}) {
  return (
    <div>
      <div className="flex flex-row items-center my-4">
        <div className="mr-[15px]">
          <p className="font-titillium font-bold text-sm text-emerald-900">
            {name}
          </p>
        </div>
        <div className="relative flex items-center">
          <p className="relative bg-white text-emerald-900 py-1 px-2 border-emerald-900 rounded-md border-2 text-xs">
            {value}%
            <span className="absolute top-1/2 right-full transform -translate-y-1/2 w-0 h-0 border-[10px] border-transparent border-r-emerald-900"></span>
          </p>
        </div>
      </div>
      <div className="w-full bg-gray-300 rounded-md overflow-hidden">
        <div
          className={`h-2 bg-emerald-900 bg-progress-stripes animate-progress-stripes rounded-md`}
          style={{
            width: `${value}%`,
          }}
        ></div>
      </div>
    </div>
  );
}
