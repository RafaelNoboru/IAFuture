"use client";

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { getUserAccountData } from '../actions/conta-actions';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface User {
  nome: string;
  telefone: string;
  cnpj: string;
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  numero: string;
  username: string;
  senha: string;
}

export default function Conta() {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserAccountData = async () => {
      const username = localStorage.getItem('username');

      if (username) {
        try {
          const userData = await getUserAccountData(username);
          setUser(userData);
        } catch (error) {
          setError('Erro ao carregar os dados da conta');
        }
      } else {
        setError('Usuário não autenticado');
      }
    };

    fetchUserAccountData();
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
            <Link href="/clientes">
              <span className="text-white px-10 text-lg font-sans">Clientes</span>
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
            <CardTitle className="text-2xl font-semibold">Dados da Conta</CardTitle>
          </CardHeader>
          <CardContent>
            {error ? (
              <div className="text-red-500">{error}</div>
            ) : user ? (
              <div>
                <p><strong>Nome:</strong> {user.nome}</p>
                <p><strong>Telefone:</strong> {user.telefone}</p>
                <p><strong>CNPJ:</strong> {user.cnpj}</p>
                <p><strong>CEP:</strong> {user.cep}</p>
                <p><strong>Logradouro:</strong> {user.logradouro}</p>
                <p><strong>Complemento:</strong> {user.complemento}</p>
                <p><strong>Bairro:</strong> {user.bairro}</p>
                <p><strong>Cidade:</strong> {user.cidade}</p>
                <p><strong>Estado:</strong> {user.estado}</p>
                <p><strong>Número:</strong> {user.numero}</p>
                <p><strong>Username:</strong> {user.username}</p>
              </div>
            ) : (
              <div>Carregando dados...</div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
