import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function Conta() {
    return (
        <main className="min-h-screen flex flex-col bg-[url('/fundo.jpg')] bg-cover bg-center bg-no-repeat">
            <header className="bg-blue-900 p-4 w-full">
                <div className="flex items-center">
                    <div className="flex items-center space-x-4">
                        <Avatar>
                            <AvatarImage src="/avatar.jpg" alt="User Avatar" />
                            <AvatarFallback>AU</AvatarFallback>
                        </Avatar>
                        <Link href="/conta">
                            <span className="text-white text-lg px-10 font-sans">Conta</span>
                        </Link>
                        <Link href="/resultados">
                            <span className="text-white text-lg px-10 font-sans">Resultados</span>
                        </Link>
                        <Link href="/clientes">
                            <span className="text-white text-lg px-10 font-sans">Clientes</span>
                        </Link>
                    </div>
                </div>
            </header>
        </main>
    )
}