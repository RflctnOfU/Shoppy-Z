import Menus from "@/app/_components/ui/menus";
export default function Page() {
  return (
    <div className="flex grow flex-col">
      <Menus />
      <div className="flex h-full grow items-center justify-center overflow-y-scroll">
        List
      </div>
    </div>
  );
}
