"use server";

import { cookies } from "next/headers";

export async function registerUser(userData: FormData) {
   
    const user: Record<string, string> = {};
    userData.forEach((value, key) => {
        user[key] = value as string;
    });

    console.log("Dados do usuário para registro:", user);

    const response = await fetch("http://localhost:8080/contas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
        cache: "no-store",
    });

    if (!response.ok) {
        return {
            message: "Falha no cadastro. " + response.status,
            success: false,
        };
    }

    const data = await response.json();

    return { 
        message: "Usuário cadastrado com sucesso!", 
        success: true,
        userId: data.id_conta 
    };
}
