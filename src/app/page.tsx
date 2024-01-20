import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

// import { CreatePost } from "@/app/_components/create-post";
import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import { signIn, signOut } from "next-auth/react";
import Button from "./_components/ui/signin";

export default async function Home() {
  noStore();
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();
  let isSignedIn;
  if (session) {
    isSignedIn = true;
  } else isSignedIn = false;
  return (
    <main className="flex grow flex-col items-center justify-center bg-gradient-to-b from-main-primary to-main-tertiary text-main-border">
      Hello World
      <Button signedIn={isSignedIn} />
      {session ? <div>Welcome back!</div> : null}
    </main>
  );
}
