import { Cliente } from "../page";

export const getClientes = async (): Promise<Cliente[]> => {
    try {
        const response = await fetch('http://localhost:8080/clientes');
        
        if (!response.ok) {
            const errorText = await response.text(); 
            throw new Error(`HTTP error! Status: ${response.status}. Response: ${errorText}`);
        }

        const data = await response.json();
        console.log('Clientes recebidos:', data);
        return data as Cliente[];
    } catch (error) {
        console.error('Erro ao buscar clientes:', error);
        return [];
    }
};
