import { useQuery } from "@tanstack/react-query";
import { api } from "../api";

export async function getUsers(){
      const {data} = await api.get('users')
      
      const users =  data.users.map(user => {
        return{
          id:user.id,
          name: user.name,
          email:user.email,
          createdAt: new Date(user.createdAt).toLocaleDateString('us-EN', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
          })
        }
      });
  
      return users;
    }

export function useUsers(){
  return(
    useQuery(['users'], getUsers , {
      staleTime: 1000 * 5, // 5 seconds
    })
  
  )
}