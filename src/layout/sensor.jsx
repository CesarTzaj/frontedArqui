import React from "react";
import { useFetch } from "../data/apires";
export function Main(){
   const {data} = useFetch();
  return <main className="sm:container mx-3">
    <section className="columns-2 w-80">
    <div className="w24 text-4xl font-bold ">id:</div>
    <div className="w24 text-4xl font-bold">Valor</div>
    </section>
    {
      data?.map(datas => <section className="flex w-80 " key={datas?.idsensor}>
        <div className="w-40  text-4xl font-light border-r-2 mx-3 border-indigo-500  " >{datas?.idsensor}</div>
        <div className="w-40 text-4xl font-light ">{datas?.valor}</div>
      </section >)
    }
  </main>
} 