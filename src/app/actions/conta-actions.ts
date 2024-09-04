"use client"

export async function getUserAccountData(username: string) {
  try {
      const response = await fetch(`/contas/${username}`);
      if (!response.ok) {
          throw new Error('Failed to fetch user data');
      }
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
  }
}

  export async function updateUserAccountData(accountData: any) {
    try {
      const response = await fetch(`http://localhost:8080/contas/${accountData.username}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          
        },
        credentials: 'include', 
        body: JSON.stringify(accountData),
      });
  
      if (!response.ok) {
        throw new Error('Falha ao atualizar o usuário');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Falha atualizando o usuário:', error);
      throw error;
    }
  }