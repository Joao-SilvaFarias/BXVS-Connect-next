"use client";

import Menu from "@/app/components/Menu";
import { MenuIcon } from "lucide-react"
import { useState } from "react";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    const [open, setOpen] = useState(false);

    return (
        <div className="h-dvh w-full relative flex lg:p-2.5 lg:gap-2.5">
            <MenuIcon className="lg:hidden absolute top-0 left-0 cursor-pointer m-2.5" onClick={() => setOpen(!open)} size={30} />
            <Menu open={open} setOpen={setOpen} />
            <main className="h-full flex-1 pt-12.5 p-2.5 lg:pt-0 lg:p-0">
                {children}
            </main>
        </div>
    );
}
