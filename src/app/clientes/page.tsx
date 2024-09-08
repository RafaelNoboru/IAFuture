"use client";

import React, { useState, useEffect } from 'react';
import { getClientes } from '../actions/cliente-actions';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

interface Cliente {
    id_cliente: number;
    nome: string;
    email: string;
    data_nascimento: string;
    cpf: string;
    telefone: string;
}

export default function Cliente(){
    
    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const clientesData = await getClientes();
                if (clientesData.length > 0) {
                    setClientes(clientesData);
                } else {
                    setError('Nenhum cliente encontrado');
                }
            } catch (error) {
                setError('Erro ao buscar clientes');
            }
        };
        fetchClientes();
    }, []);

   
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
                            <span className="text-white px-10 text-lg font-sans">Conta</span>
                        </Link>
                        <Link href="/resultados">
                            <span className="text-white px-10 text-lg font-sans">Resultados da IA</span>
                        </Link>
                    </div>
                </div>
            </header>

            <div className="flex-1 flex flex-col items-center justify-center p-4">
                <Card className="w-full max-w-5xl bg-white shadow-lg rounded-lg">
                    <CardHeader>
                        <CardTitle className="text-2xl font-semibold">Lista de Clientes</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {error ? (
                            <div className="text-red-500">{error}</div>
                        ) : (
                            <table className="w-full table-auto border-collapse">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="border px-4 py-2">Nome</th>
                                        <th className="border px-4 py-2">Email</th>
                                        <th className="border px-4 py-2">Data de Nascimento</th>
                                        <th className="border px-4 py-2">CPF</th>
                                        <th className="border px-4 py-2">Telefone</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {clientes.map((cliente) => (
                                        <tr key={cliente.id_cliente} className="bg-gray-100">
                                            <td className="border px-4 py-2">{cliente.nome}</td>
                                            <td className="border px-4 py-2">{cliente.email}</td>
                                            <td className="border px-4 py-2">{cliente.data_nascimento}</td>
                                            <td className="border px-4 py-2">{cliente.cpf}</td>
                                            <td className="border px-4 py-2">{cliente.telefone}</td>
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
};


