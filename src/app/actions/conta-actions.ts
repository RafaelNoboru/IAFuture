"use server"

import { cookies } from "next/headers";

export async function getUserAccountData(username: string) {
    try {
        const response = await fetch(`http://localhost:8080/contas/${username}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${cookies().get('token')?.value}`,
                'Content-Type': 'application/json',
            },
        });

        console.log('Response status:', response.status); 

        if (!response.ok) {
            throw new Error('Erro na requisição');
        }

        const data = await response.json();
        console.log('User data:', data); 

        return data;
    } catch (error) {
        console.error('Erro ao buscar os dados do usuário:', error);
    }
}
