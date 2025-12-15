import "@/app/globals.css"
import Splash from "@/app/components/TelaSplash";
import {Bebas_Neue, Inter} from "next/font/google"

const bebasNeue = Bebas_Neue({
  weight: "400", 
  variable: "--bebas-neue"
});

const inter = Inter({
  weight: "400", 
  variable: "--inter"
})

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${inter.variable} text-(--texto) font-inter bg-background`}>
        {children}
        <Splash/>
      </body>
    </html>
  );
}
