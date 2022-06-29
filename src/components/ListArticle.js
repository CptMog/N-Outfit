import { fetchData } from "../datas/data.js";
import Article from "./Article";
import { useState,useEffect } from "react";
import './../styles/ListArticle.css'

export default function ListArticle({cart,setCart}){
    const [datas,setDatas] = useState([]);

    useEffect(() =>
        fetchData(setDatas) //fetch the data from the api in my state datas
    ,[])

    return(
        <div className="container-list-articles">
           {datas.map((data)=> (
                <Article key={`article-${data.id}`} 
                    name={data.name} 
                    img={data.imageUrl}
                    price={data.price.current.value} 
                    cart={cart} 
                    setCart={setCart}
                />
           ))}
        </div>
    )

}