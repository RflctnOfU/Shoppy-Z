"use client";
import { signIn, signOut } from "next-auth/react";
import { LogOut, LogIn } from "lucide-react";

export default function Button({ signedIn }: { signedIn: boolean }) {
  if (signedIn) {
    return (
      <button onClick={() => signOut({ callbackUrl: "http://localhost:3000" })}>
        <LogOut size={35} className="inline pr-1" /> Sign Out
      </button>
    );
  } else
    return (
      <button
        onClick={() =>
          signIn("google", { callbackUrl: "http://localhost:3000/dashboard" })
        }
      >
        <LogIn size={35} className="inline pr-1" /> Sign In
      </button>
    );
}
