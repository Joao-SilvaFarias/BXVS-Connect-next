"use client";

import Link from "next/link";

interface MenuProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu = ({ open, setOpen }: MenuProps) => {

    return (
        <nav className={`h-dvh w-75 bg-(--color-background) fixed md:static top-0 left-0 ${open ? "left-0" : "left-[-300px]"} flex transition-left duration-300 z-1`}>
            <ul className="w-full">
                <Link href="/" onClick={() => setOpen(false)}>
                    <li className="p-2.5 hover:bg-(--color-hover-gray) transition duration-300">Home</li>
                </Link>
                <Link href="/dashboard" onClick={() => setOpen(false)}>
                    <li className="p-2.5 hover:bg-(--color-hover-gray) transition duration-300">Dashboard</li>
                </Link>
                <Link href="/gestao-de-alunos" onClick={() => setOpen(false)}>
                    <li className="p-2.5 hover:bg-(--color-hover-gray) transition duration-300">Gestão Alunos</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Menu;