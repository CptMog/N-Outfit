// import { data } from "../datas/dataOutfits";
import Article from "./Article";
import { useState,useEffect } from "react";
import './../styles/ListArticle.css'

export default function ListArticle(){
    const [data,setData] = useState([]);
    
    const fetchData = ()=>{
        const options = {
            method: 'GET',
            headers: {
            'X-RapidAPI-Key': '69da9f3087mshc503a5c091118e3p1e0996jsn82d0852cc1f5',
            'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
            }
        };
        
        fetch('https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4213&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US', options)
            .then(response => response.json())
            .then(response => setData(response.products))
            .catch(err => console.error(err));
    }

    useEffect(() =>
        fetchData()
    ,[])
    return(
        <div className="container-list-articles">
           {data.map((d)=> (
                <Article key={`article-${d.id}`} name={d.name} price={d.price.current.text} img={d.imageUrl}/>
           ))}
        </div>
    )

}