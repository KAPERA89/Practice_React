import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const Test9 = () => {

    const {data: catData, isLoading, isError, refetch} =useQuery({
        queryKey: ["cat"],
        queryFn: async () => {
         const res = await axios.get("https://catfact.ninja/fact");
            return res.data;
        },
      });


  return (

    <div> 
        <h1>Test {catData?.fact}</h1> 
        <button onClick={refetch}>Refetch</button>
    </div>
  )
}

export default Test9