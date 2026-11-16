export default function Mark({ light = false }: { light?: boolean }) {
  return (
    <span
      className={`relative grid h-9 w-9 place-items-center overflow-hidden rounded-lg ${
        light ? "bg-white text-[#090A0F]" : "bg-[#090A0F] text-white"
      }`}
      aria-hidden
    >
      <span className="absolute top-0 right-0 h-3 w-3 bg-[#2563EB]" />
      <span className="text-[10px] font-bold tracking-tight">TOP</span>
    </span>
  );
}
