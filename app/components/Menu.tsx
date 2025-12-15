"use client";

import { ChartLine, DoorClosedLocked, SquareUser } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface MenuProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu = ({ open, setOpen }: MenuProps) => <>
    <div className={`absolute w-dvw h-dvh bg-(--color-black-opacity) ${open ? "block" : "hidden"} lg:hidden z-1`} onClick={() => setOpen(false)}></div>
    <nav className={`h-full w-75 bg-(--color-background-components) fixed lg:static top-0 left-0 ${open ? "left-0" : "left-[-300px]"} flex flex-col transition-left duration-300 z-2 rounded-4xl gap-8`}>
        <header className="w-full p-2.5 bg-(--color-primary) rounded-4xl flex items-center h-20">
            <Image src="/logo.png" width={50} height={50} alt="Logo" />
            <h1 className="text-white text-2xl font-bold ml-2.5 inline-block align-middle font-bebas-neue">BXVS Connect</h1>
        </header>
        <ul className="w-full flex flex-col p-2.5 gap-2.5">
            <Link href="/controle-de-acesso" onClick={() => setOpen(false)} className="flex items-center w-full p-2.5 hover:bg-(--color-background-hover) transition duration-300 gap-2.5 rounded-full">
                <DoorClosedLocked size={20} />
                <li>Controle de Acesso</li>
            </Link>
            <Link href="/gestao-de-alunos" onClick={() => setOpen(false)} className="flex items-center w-full p-2.5 hover:bg-(--color-background-hover) transition duration-300 gap-2.5 rounded-full">
                <SquareUser size={20} />
                <li>Gestão de Alunos  </li>
            </Link>
            <Link href="/" onClick={() => setOpen(false)} className="flex items-center w-full p-2.5 hover:bg-(--color-background-hover) transition duration-300 gap-2.5 rounded-full">
                <ChartLine size={20} />
                <li>Dashboard</li>
            </Link>
        </ul>
    </nav>
</>

export default Menu;