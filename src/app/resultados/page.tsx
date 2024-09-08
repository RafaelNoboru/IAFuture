"use client"

import { useEffect, useState } from "react"
import { getResultados } from "../actions/resultados-actions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ResultadoIA {
    id_resultado: number;
    tipo_analise: string;
    detalhes: string;
}


export default function Resultados(){
    
    const[resultados, setResultados] = useState<ResultadoIA[]>([]);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const resultadosData = await getResultados();
                if (resultadosData.length > 0) {
                    setResultados(resultadosData);
                } else {
                    setError('Nenhum resultado encontrado');
                }
            } catch (error) {
                setError('Erro ao buscar resultados');
            }
        };
        fetchClientes();
    }, []);

    return(
        <main className="min-h-screen flex flex-col bg-[url('/fundo.jpg')] bg-cover bg-center bg-no-repeat">
        <header className="bg-blue-900 p-4 w-full">
            <div className="flex items-center">
                <div className="flex items-center space-x-4">
                    <Avatar>
                        <AvatarImage src="/avatar.jpg" alt="User Avatar" />
                        <AvatarFallback>AU</AvatarFallback>
                    </Avatar>
                    <span className="text-white text-lg px-10 font-sans">Clientes</span>
                    <Link href="/conta">
                        <span className="text-white px-10 text-lg font-sans">Conta</span>
                    </Link>
                </div>
            </div>
        </header>

        <div className="flex-1 flex flex-col items-center justify-center p-4">
            <Card className="w-full max-w-5xl bg-white shadow-lg rounded-lg">
                <CardHeader>
                    <CardTitle className="text-2xl font-semibold">Lista de Resultados</CardTitle>
                </CardHeader>
                <CardContent>
                    {error ? (
                        <div className="text-red-500">{error}</div>
                    ) : (
                        <table className="w-full table-auto border-collapse">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border px-4 py-2">Tipo de análise</th>
                                    <th className="border px-4 py-2">Detalhes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {resultados.map((resultados) => (
                                    <tr key={resultados.id_resultado} className="bg-gray-100">
                                        <td className="border px-4 py-2">{resultados.tipo_analise}</td>
                                        <td className="border px-4 py-2">{resultados.detalhes}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </CardContent>
            </Card>
        </div>
    </main>
);
}