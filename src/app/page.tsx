"use client"

import { SystemMessage } from "@/components/chat/SystemMessage";
import { UserMessage } from "@/components/chat/UserMessage";
import { CreateFood } from "@/components/foods/CreateFood";
import { SearchFood } from "@/components/foods/SearchFood";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { type FormEvent, useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log("submit")
  }

  return <main className="min-h-screen flex flex-col justify-end bg-neutral-800">
    <div className="grow flex flex-col gap-6  container">
      <CreateFood />
      <SearchFood />
      <SystemMessage message="Hello, how can I help you?" />
      <UserMessage message="What can you do for me?" />
    </div>
    <form className="bg-neutral-900 p-8 flex items-center justify-center gap-4" onSubmit={submit}>
      <Input className="w-3/4" placeholder="enter your prompt" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
      <Button type="submit">Send</Button>
    </form>
  </main>
}

