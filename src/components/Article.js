import "./../styles/Article.css";

export default function Article({name,price,img}){
    // console.log(props)
    return(
        <div className="container-article">
            <div className="container-article-photo">
                <img src={`https://${img}`} alt="" />
            </div>
            <div className="container-article-datas">
                <span className="article-name">{name}</span>
                <span>{price}</span>
            </div>
            
        </div>
    )
}