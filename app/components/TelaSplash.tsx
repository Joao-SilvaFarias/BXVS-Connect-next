"use client";
import { useEffect, useState } from "react";
import ContainerSistema from "./ContainerSistema";

export default function Splash() {
    const [visible, setVisible] = useState(true);
    const [display, setDisplay] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setVisible(false);
            setTimeout(() => {
                setDisplay(false);
            }, 500);
        }, 2000);
    }, []);

    if (!display) return null;

    return <div
        className={`
        w-screen h-dvh 
        bg-[url('/backgroundTelaSplash.jpg')] 
        bg-cover absolute 
        bg-center
        transition-opacity duration-500 ease-out 
        ${visible ? 'opacity-100' : 'opacity-0'} flex items-center justify-center
      `}
    >
        <ContainerSistema />
    </div>
}