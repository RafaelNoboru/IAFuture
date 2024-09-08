import { useState } from 'react';

export function useLogin() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (credentials: { username: string; senha: string }) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('Token', data.token); 
        return data; 
      } else {
        
        const errorData = await response.json();
        const errorMessage = errorData?.message || 'Erro desconhecido. Por favor, tente novamente.';
        throw new Error(errorData.message);
        
      }
    } catch (err: any) {
      setError(err.message || 'Erro ao fazer login. Verifique suas credenciais e tente novamente.');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { login, error, isLoading };
}
