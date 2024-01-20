import { getServerAuthSession } from "@/server/auth";
import { LogOut } from "lucide-react";
import Link from "next/link";
import Button from "../_components/ui/signin";
export default async function Page() {
  const session = await getServerAuthSession();
  let isSignedIn;
  if (session) {
    isSignedIn = true;
  } else isSignedIn = false;
  return (
    <div className="flex h-full grow flex-col items-center justify-between bg-main-primary text-main-border">
      <div className="flex w-full justify-end p-4">
        <LogOut size={35} />
      </div>
      <div>
        <p>Hello World</p>
        <Button signedIn={isSignedIn} />
      </div>
      <div></div>
    </div>
  );
}
