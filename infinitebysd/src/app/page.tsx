"use client";

import * as React from "react";
import { useState, useEffect } from "react";

import Image from "next/image";
import {
  Menu,
  Linkedin,
  Instagram,
  Mails,
  Mail,
  Moon,
  Sun,
} from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mode, setMode] = useState<string>("work");

  useEffect(() => {
    // if (theme === "dark") {
    //   setMode("work");
    //   setTheme("light");
    // } else {
    //   setTheme("dark");
    // }
  }, [setTheme]);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setMode("fun");
    } else {
      setTheme("light");
      setMode("work");
    }
  };

  return (
    <main className=" min-h-screen flex-col items-center justify-between py-4 `overflow-y-scroll">
      <header className="header flex justify-center items-center py-2">
        <div className="grid w-full grid-flow-col gap-4">
          <div className="logo-container flex justify-center items-center">
            <Image
              src={"/logo.svg"}
              alt="infinitebysd"
              height={100}
              width={100}
              className="object-scale-down object-left invert dark:invert-0"
            />
          </div>

          <div className="flex justify-center items-center">
            <h1 className="text-4xl text-center font-bold">Infinity by SD</h1>
            <div className="flex flex-col justify-center items-center mx-10">
              <Switch
                id="change-mode"
                checked={theme === "dark"}
                onCheckedChange={toggleTheme}
                className="b"
              />
              <Label htmlFor="change-mode" className="">
                {mode}
              </Label>
            </div>
          </div>

          <div className="flex justify-evenly gap-2 items-center">
            <div>
              <Menu />
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      <div className="space-y-8">
        <div className="grid grid-flow-col items-center bg-gradient-to-r from-slate-200 to-blue-400 dark:bg-gradient-to-r dark:from-slate-950 dark:to-indigo-950">
          <h2 className="text-4xl text-center">
            Your 19-year-old “Finance Bro”
          </h2>

          <div className="flex justify-center items-center">
            <Image
              src={"/deepbruh.webp"}
              alt="infinitebysd"
              height={300}
              width={300}
              className=" object-scale-down"
            />
          </div>
        </div>

        <div className="grid grid-cols-12 grid-flow-col gap-8 grid-rows-2">
          <div className="col-start-2 col-end-8 row-start-1">
            <div className="space-y-8">
              <h1 className="text-4xl font-extrabold">About Infinity</h1>
              <div className="space-y-2">
                <p className="text-xl">Hello everyone,</p>
                <p className="text-xl">
                  Welcome to Infinity. I started this page to share what I learn
                  daily. I will be very candid in my writing and will bring it
                  down to a conversational level to cater to the understanding
                  of different levels of readers. This is mainly because I will
                  be covering various topics starting from Finance and Business
                  to even Tech and Economics.
                </p>
                <p className="text-xl">
                  The main reason for me to start this page/newsletter is to
                  document my learnings and progress. I am a sophomore pursuing
                  a Bachelor in Commerce(Honours). Knowing that I have a long
                  way to go to break into my preferred line of work, I have
                  decided to document the entire journey while being candid
                  about my day-to-day life as a 19-year-old “Finance Bro”.
                </p>
                <p className="text-xl">
                  Another reason behind starting this is that I want to stay
                  disciplined. Having and learn so I can cover topics and help
                  people know more while pennia page like this is exactly what
                  gives me the motivation to regularly write ng it down for even
                  my future references. As previously mentioned, I am going to
                  be very candid in my writing, so expect a lot of “Day Recaps”
                  and “I read about this today…”.
                </p>
                <p className="text-xl"></p>
                <p className="text-xl">
                  Looking forward to poking your mailboxes regularly, Thank you!
                </p>
              </div>
            </div>
          </div>
          <div className="col-start-9 col-end-12">
            <Card className="justify-self-center">
              <CardHeader>
                <CardTitle className="text-4xl">
                  Subscribe to my Newsletter
                </CardTitle>
                <CardDescription>
                  sign up to my newsletter to get the SDz take on the future of
                  finance.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid justify-center">
                <Link href="https://www.linkedin.com/in/supratim-das-4a01b2192/">
                  <Button className="h-20 w-32">
                    <Mails />
                  </Button>
                </Link>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          </div>
          <div className="BLOG row-start-2 w-full col-start-2 col-end-12 my-10 space-y-8">
            <h1 className="text-4xl font-extrabold">My Blogs</h1>
            <div className="grid grid-cols-2 gap-8">
              <Card className="col-start-1">
                <CardHeader>
                  <CardTitle>
                    <Link
                      href={"https://infinitybysd.beehiiv.com/p/pavel-durov"}
                      className="hover:text-indigo-500"
                    >
                      Pavel Durov??
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-xl">
                  <p className="mb-2">
                    The 39-year-old, whose net worth is around $15 billion,
                    makes him one of the richest people in the world.
                  </p>
                  <p>
                    Funnily enough, he has more than 100 kids all over the world
                    as he is a regular sperm donor because of being “a
                    high-quality donor material”...
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href={"https://infinitybysd.beehiiv.com/p/pavel-durov"}>
                    <Button>Read more here</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="col-start-2">
                <CardHeader>
                  <CardTitle>
                    <Link
                      href={
                        "https://infinitybysd.beehiiv.com/p/financial-goals"
                      }
                      className="hover:text-indigo-500"
                    >
                      Financial Goals.
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-xl">
                  <p className="mb-2">
                    A common perception is that “Financial Goal” means being
                    financially independent. Well, that’s more of an end goal.
                    But there’s MORE to it.
                  </p>
                  <p>
                    Financial Goal means, being able to manage, grow, AND use
                    your money in a way which keeps YOU satisfied...
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href={"https://infinitybysd.beehiiv.com/p/financial-goals"}
                  >
                    <Button>Read more here</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>

        <Separator />
        <footer>
          <div className="grid grid-flow-row">
            <div className="w-full grid">
              <h3 className="text-xl text-center">Contact Me</h3>
              <div className="grid grid-flow-col-dense gap-4 items-center justify-center h-20">
                <Link href="https://www.linkedin.com/in/supratim-das-4a01b2192/">
                  <Button>
                    <Linkedin />
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/supratim-das-4a01b2192/">
                  <Button className="">
                    <Instagram />
                  </Button>
                </Link>
                <Link href="mailto:2205933@kiit.ac.in">
                  <Button className="">
                    <Mail />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
