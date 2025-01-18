export function Title({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <>
      <p className="font-titillium text-4xl font-light text-emerald-900">
        <small className="mr-[10px] text-base">{subtitle}</small>
        {title}
      </p>
      <div className="h-[2px] w-[40px] bg-emerald-900 ml-[30px] mt-[5px]" />
    </>
  );
}
