"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { registerUser } from "../actions/cadastro-actions";
import { useState } from "react";

interface User {
 
  nome: string;
  telefone: string;
  cnpj: string;
  cep: string;
  logradouro: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  estado: string;
  numero: string;
  username: string;
  senha: string;
}


export default function Cadastro(){
  
  const [user, setUser] = useState<User>({
    nome: "",
    telefone: "",
    cnpj: "",
    cep: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    numero: "",
    username: "",
    senha: ""
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { id, value } = e.target;
  setUser(prevState => ({
      ...prevState,
      [id]: value
  }));
};

const handleRegister = async (event: React.FormEvent) => {
  event.preventDefault();
  
  const formData = new FormData();
  Object.entries(user).forEach(([key, value]) => {
      formData.append(key, value);
  });

  console.log("FormData enviado:", Array.from(formData.entries())); 

  const result = await registerUser(formData);
  alert(result.message);
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
              </div>
          </div>
      </header>
      <div className="flex-1 flex flex-col items-center justify-center p-4">
          <h1 className="text-6xl font-bold text-white mb-8">CADASTRO</h1>
          <Card className="w-full max-w-lg bg-white shadow-lg rounded-lg">
              <CardHeader>
                  <CardTitle className="text-2xl font-semibold">Cadastro</CardTitle>
              </CardHeader>
              <CardContent>
                  <form onSubmit={handleRegister}>
                      <div className="mb-4">
                          <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome</label>
                          <input
                              id="nome"
                              type="text"
                              placeholder="Digite seu nome"
                              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                              value={user.nome}
                              onChange={handleChange}
                              required
                          />
                      </div>
                      <div className="mb-4">
                          <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">Telefone</label>
                          <input
                              id="telefone"
                              type="tel"
                              placeholder="Digite seu telefone"
                              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                              value={user.telefone}
                              onChange={handleChange}
                              required
                          />
                      </div>
                      <div className="mb-4">
                          <label htmlFor="cnpj" className="block text-sm font-medium text-gray-700">CNPJ</label>
                          <input
                              id="cnpj"
                              type="text"
                              placeholder="Digite seu CNPJ"
                              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                              value={user.cnpj}
                              onChange={handleChange}
                              required
                          />
                      </div>
                      <div className="mb-4">
                          <label className="block font-medium text-gray-700">Endereço</label>
                          <div className="mt-1">
                              <label htmlFor="cep" className="block text-xs font-medium text-gray-700">CEP</label>
                              <input
                                  id="cep"
                                  type="text"
                                  placeholder="Digite seu CEP"
                                  className="mb-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  value={user.cep}
                                  onChange={handleChange}
                                  required
                              />
                          </div>
                          <div className="mt-1">
                              <label htmlFor="logradouro" className="block text-xs font-medium text-gray-700">Logradouro</label>
                              <input
                                  id="logradouro"
                                  type="text"
                                  placeholder="Digite seu logradouro"
                                  className="mb-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  value={user.logradouro}
                                  onChange={handleChange}
                                  required
                              />
                          </div>
                          <div className="mt-1">
                              <label htmlFor="numero" className="block text-xs font-medium text-gray-700">Número</label>
                              <input
                                  id="numero"
                                  type="text"
                                  placeholder="Digite o número"
                                  className="mb-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  value={user.numero}
                                  onChange={handleChange}
                                  required
                              />
                          </div>
                          <div className="mt-1">
                              <label htmlFor="complemento" className="block text-xs font-medium text-gray-700">Complemento</label>
                              <input
                                  id="complemento"
                                  type="text"
                                  placeholder="Digite o complemento"
                                  className="mb-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  value={user.complemento}
                                  onChange={handleChange}
                              />
                          </div>
                          <div className="mt-1">
                              <label htmlFor="bairro" className="block text-xs font-medium text-gray-700">Bairro</label>
                              <input
                                  id="bairro"
                                  type="text"
                                  placeholder="Digite seu bairro"
                                  className="mb-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  value={user.bairro}
                                  onChange={handleChange}
                                  required
                              />
                          </div>
                          <div className="mt-1">
                              <label htmlFor="cidade" className="block text-xs font-medium text-gray-700">Cidade</label>
                              <input
                                  id="cidade"
                                  type="text"
                                  placeholder="Digite sua cidade"
                                  className="mb-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  value={user.cidade}
                                  onChange={handleChange}
                                  required
                              />
                          </div>
                          <div className="mt-1">
                              <label htmlFor="estado" className="block text-xs font-medium text-gray-700">Estado</label>
                              <input
                                  id="estado"
                                  type="text"
                                  placeholder="Digite seu estado"
                                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  value={user.estado}
                                  onChange={handleChange}
                                  required
                              />
                          </div>
                      </div>
                      <div className="mb-4">
                          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                          <input
                              id="username"
                              type="text"
                              placeholder="Digite seu username"
                              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                              value={user.username}
                              onChange={handleChange}
                              required
                          />
                      </div>
                      <div className="mb-4">
                          <label htmlFor="senha" className="block text-sm font-medium text-gray-700">Senha</label>
                          <input
                              id="senha"
                              type="password"
                              placeholder="Digite seu senha"
                              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                              value={user.senha}
                              onChange={handleChange}
                              required
                          />
                      </div>
                      <button
                          type="submit"
                          className="w-full px-4 py-2 mt-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                          Cadastrar
                      </button>
                  </form>
                  <div className="mt-4 text-center">
                      <p className="text-sm text-gray-600">Já tem uma conta?</p>
                      <Link href="/">
                          <button
                              type="button"
                              className="mt-2 px-4 py-2 bg-gray-500 text-white font-semibold rounded-md shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500">
                              Voltar ao Login
                          </button>
                      </Link>
                  </div>
              </CardContent>
          </Card>
      </div>
  </main>
);
}

