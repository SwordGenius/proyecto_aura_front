import Login from "@/app/components/Login";
import React from "react";
import Content from "@/app/components/Content";
import Guide from "@/app/components/Guide";
import HomePage from "@/app/components/HomePage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <HomePage/>
    </main>
  )
}
