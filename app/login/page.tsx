import ContainerSistema from "../components/ContainerSistema";

type InputProps = {
    type: string;
    placeholder: string
}

const Input = ({type, placeholder}: InputProps) => {
    return <input type={type} placeholder={placeholder} className="h-12 w-full p-2.5 bg-white text-black outline-blue-200 rounded-[10px]"/>
}

const Login = () => {
    return <div className="w-screen h-dvh bg-[url('/backgroundTelaSplash.jpg')] bg-cover bg-center bg-fixed items-center justify-evenly p-2.5 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
            <ContainerSistema/>
        </div>
        <div className="flex flex-col items-start w-full md:w-1/2 gap-5 bg">
            <h2 className="text-5xl font-bebas-neue font-bold">Iniciar sessão</h2>
            <Input type="email" placeholder="E-mail" />
            <Input type="password" placeholder="Senha" />
            <button className="w-full h-12 bg-primary rounded-[10px] cursor-pointer hover:bg-light-green transition delay-5" type="submit">Entrar</button>
        </div>
    </div>;
}
 
export default Login;