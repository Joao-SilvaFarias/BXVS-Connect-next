import Image from "next/image";

const ContainerSistema = () => {
    return ( 
        <div className={`flex flex-col items-center font-bebas-neue`}>
            <Image src="/logo.png" width={300} height={300} alt="Logo"/>
            <h1 className="text-7xl font-bold">BXVS CONNECT</h1>
            <h2 className="text-2xl font-bold">Sua gestão inteligente</h2>
        </div>
     );
}
 
export default ContainerSistema;