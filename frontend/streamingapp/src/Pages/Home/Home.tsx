import { useState,useEffect } from 'react'
import axios from 'axios'

const HomePage = () =>{
  const [data, setData] = useState(); 

  useEffect(() => {
    axios.get('http://localhost:8000/ssoLogin/api/')
      .then(res => {
        setData(res.data); 
        console.log(data);
      })
      .catch(err => { console.log(err.message); })  
  }, []);

  return (
    <>
    {data != undefined ? 
    data.map((output:object, id:any)=> (
      <div key={id}>
        <div>
        <h2>{output.first_name}</h2>
        <h2>{output.last_name}</h2>
        <h2>{output.username}</h2>
        <h2>{output.email}</h2>
        </div>
      </div>
     )): ""} 
    </>
  )

}
export default HomePage;