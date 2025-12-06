"use client";

import Menu from "@/app/components/Menu";
import { MenuIcon } from "lucide-react"
import { useState } from "react";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    const [open, setOpen] = useState(false);

    return (
        <div className="bg-(--color-background-components) h-dvh relative flex md:pt-0">
            <MenuIcon className="md:hidden absolute top-0 left-0 cursor-pointer m-2.5" onClick={() => setOpen(!open)} size={30} />
            <Menu open={open} setOpen={setOpen} />
            <main className="min-h-dvh flex-1 flex justify-center items-center">
                {children}
            </main>
        </div>
    );
}
