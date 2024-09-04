"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getUserAccountData, updateUserAccountData } from '../actions/conta-actions';


export default function Conta() {

    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const username = 'usuarioTeste'; 
                const data = await getUserAccountData(username);
                setUser(data);
            } catch (err) {
                setError('Failed to fetch user data');
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await updateUserAccountData(user);
            alert('Data updated successfully');
        } catch (err) {
            setError('Failed to update user data');
        }
    };

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
            <div className="flex-1 flex flex-col items-center justify-center p-4">
                <Card className="w-full max-w-md bg-white shadow-lg rounded-lg">
                    <CardHeader>
                        <CardTitle className="text-2xl font-semibold">Informações da Conta</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {user ? (
                            <>
                                <div className="mb-4">
                                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome</label>
                                    <input
                                        id="nome"
                                        type="text"
                                        value={user.nome || ''}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        onChange={(e) => setUser({ ...user, nome: e.target.value })}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">Telefone</label>
                                    <input
                                        id="telefone"
                                        type="text"
                                        value={user.telefone || ''}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        onChange={(e) => setUser({ ...user, telefone: e.target.value })}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="cnpj" className="block text-sm font-medium text-gray-700">CNPJ</label>
                                    <input
                                        id="cnpj"
                                        type="text"
                                        value={user.cnpj || ''}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        onChange={(e) => setUser({ ...user, cnpj: e.target.value })}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="cep" className="block text-sm font-medium text-gray-700">CEP</label>
                                    <input
                                        id="cep"
                                        type="text"
                                        value={user.cep || ''}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        onChange={(e) => setUser({ ...user, cep: e.target.value })}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="logradouro" className="block text-sm font-medium text-gray-700">Logradouro</label>
                                    <input
                                        id="logradouro"
                                        type="text"
                                        value={user.logradouro || ''}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        onChange={(e) => setUser({ ...user, logradouro: e.target.value })}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="numero" className="block text-sm font-medium text-gray-700">Número</label>
                                    <input
                                        id="numero"
                                        type="text"
                                        value={user.numero || ''}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        onChange={(e) => setUser({ ...user, numero: e.target.value })}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="complemento" className="block text-sm font-medium text-gray-700">Complemento</label>
                                    <input
                                        id="complemento"
                                        type="text"
                                        value={user.complemento || ''}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        onChange={(e) => setUser({ ...user, complemento: e.target.value })}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="bairro" className="block text-sm font-medium text-gray-700">Bairro</label>
                                    <input
                                        id="bairro"
                                        type="text"
                                        value={user.bairro || ''}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        onChange={(e) => setUser({ ...user, bairro: e.target.value })}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="cidade" className="block text-sm font-medium text-gray-700">Cidade</label>
                                    <input
                                        id="cidade"
                                        type="text"
                                        value={user.cidade || ''}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        onChange={(e) => setUser({ ...user, cidade: e.target.value })}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="estado" className="block text-sm font-medium text-gray-700">Estado</label>
                                    <input
                                        id="estado"
                                        type="text"
                                        value={user.estado || ''}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        onChange={(e) => setUser({ ...user, estado: e.target.value })}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                                    <input
                                        id="username"
                                        type="text"
                                        value={user.username || ''}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        readOnly
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="senha" className="block text-sm font-medium text-gray-700">Senha</label>
                                    <input
                                        id="senha"
                                        type="password"
                                        value={user.senha || ''}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        onChange={(e) => setUser({ ...user, senha: e.target.value })}
                                    />
                                </div>
                            </>
                        ) : (
                            <p className="text-gray-500">Carregando dados da conta...</p>
                        )}
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}    
