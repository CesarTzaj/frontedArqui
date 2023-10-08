
import { useEffect, useState } from "react";
const url = 'https://aqui2.azurewebsites.net/all'
const url2 = 'http://localhost:8081/all'

function useFetch(){
  const [data, setData] = useState(null)
  
  
  
  async function getData() {
    try {
        let response = await fetch (`${url2}`);
      
      
      if (response.status ===200) {
          const apiData = await response.json();
          setData(apiData);
      } else {
        let status = {
          url: `${url}`,
          statud: response.status
        }
        setData(status);
      }
    } catch (error) {
      setData(error);
  }
  }

  useEffect(() =>{
    setInterval(() => {
      getData()
      
    }, 5000);
  },[])
  
return{
  data
}
}


export {useFetch}

