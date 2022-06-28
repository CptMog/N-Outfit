import "./../styles/Article.css";

export default function Article({name,img,price,cart,setCart}){
	
	function addToCart(name,value){
		const elemDouble = cart.find(elem =>elem.name === name)
        let elemsRestant = [];
		if(elemDouble){
			elemsRestant = cart.filter(elem =>elem.name !== name)
			setCart([...elemsRestant,{name,value, amount: elemDouble.amount+1}])
		}else{
			setCart([...cart,{name,value, amount:1}])
		}
	}

    return(
        <div className="container-article" onClick={()=>addToCart(name,price)}>
            <div className="container-article-photo">
                <img src={`https://${img}`} alt="" />
            </div>
            <div className="container-article-datas">
                <span className="article-name">{name}</span>
                <span>${price}</span>
            </div>       
        </div>
    )
}