type Size = "sm" | "md" | "lg";

const SIZE: Record<Size, string> = {
  sm: "h-3.5 w-[1.4rem]",
  md: "h-4 w-[1.55rem]",
  lg: "h-11 w-[4.1rem]",
};

export function Flag({
  code,
  name,
  size = "md",
}: {
  code: string;
  name: string;
  size?: Size;
}) {
  return (
    <span
      className={`relative inline-flex shrink-0 overflow-hidden rounded-[1px] bg-[#f4f4f4] ${SIZE[size]} ring-1 ring-gold/80 shadow-[0_0_18px_rgba(197,160,89,0.16)]`}
      title={name}
    >
      <img src={`/flags/${code}.svg`} alt="" className="h-full w-full object-cover" />
    </span>
  );
}
