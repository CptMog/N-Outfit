import { fetchData } from "../datas/data.js";
import Article from "./Article";
import { useState,useEffect } from "react";
import './../styles/ListArticle.css'

export default function ListArticle(){
    const [data,setData] = useState([]);

    useEffect(() =>
        fetchData(setData)
    ,[])

    return(
        <div className="container-list-articles">
           {data.map((d)=> (
                <Article key={`article-${d.id}`} name={d.name} price={d.price.current.text} img={d.imageUrl}/>
           ))}
        </div>
    )

}