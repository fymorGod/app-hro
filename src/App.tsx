import { useState, useEffect } from 'react'
import { api } from './services/api';


type User = {
  id: string;
  nome: string;
  address: string;
}

function App() {
  const [ user, setUser ] = useState<User[]>([])

  const [valor, setValor] = useState('');
  useEffect(() => {
    api.get<User[]>(`/${valor}`).then(response => {
      console.log(response.data);
      setUser(response.data);
    })
  }, [valor])

  return (
   <div>
     <h2>Salve Fylip</h2>
     <ul>
       {user.map( (u) => {
         return (
           <li key={u.id}>
             <p>{u.nome}</p>
           </li>
         )
       })}
     </ul>
     <input type="text" onChange={e => setValor(e.target.value)}/>
   </div>
  )
}

export default App
