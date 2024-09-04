"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useState } from "react";
import { useLogin } from "./actions/login-actions";

export default function Home() {
  const { login, error, isLoading } = useLogin();
  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState(''); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login({ username, senha });
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
            <Link href="/sobre">
              <span className="text-white text-lg font-sans">Sobre nós</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <h1 className="text-6xl font-bold text-white mb-8">IA FUTURE</h1>

        <Card className="w-full max-w-md bg-white shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}> {}
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                <input
                  id="username"
                  type="text"
                  placeholder="Digite seu username"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="senha" className="block text-sm font-medium text-gray-700">Senha</label>
                <input
                  id="senha" 
                  type="password"
                  placeholder="Digite sua senha"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setSenha(e.target.value)} 
                  required
                />
              </div>
              <Link href="/conta">
              <button
                type="submit" 
                className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {isLoading ? 'Entrando...' : 'Login'} {}
              </button>
              </Link>
            </form>
            {error && <div className="mt-4 text-center text-red-500">{error}</div>} {}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">Não tem uma conta?</p>
              <Link href="/cadastro">
                <button
                  type="button"
                  className="mt-2 px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Cadastrar-se
                </button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
