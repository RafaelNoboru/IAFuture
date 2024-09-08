import { ResultadoIA } from "../page";

export const getResultados = async (): Promise<ResultadoIA[]> => {
    try {
        const response = await fetch('http://localhost:8080/resultados');
        
        if (!response.ok) {
            const errorText = await response.text(); 
            throw new Error(`Erro HTTP! Status: ${response.status}. Response: ${errorText}`);
        }

        const data = await response.json();
        return data as ResultadoIA[];
    } catch (error) {
        console.error('Erro ao buscar resultados:', error);
        return [];
    }
};