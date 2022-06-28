import {FaShoppingCart} from 'react-icons/fa';
import './../styles/Cart.css';
import { useState } from 'react';

export default function Cart({cart,setCart}){

    const [isOpen,setIsOpen] = useState(0);
    function CalcTot(cart){
        let total =0;

        cart.map((elem)=>{
            total += elem.value * elem.amount;
            return 0;
        })

        return total;
    }
        return(
            ( isOpen ?
                <div className='container-cart'>
                   
                    <div className='container-r-cart open'>
                    <h2>Items</h2>
                        <div className='items'>
                            <ul>
                                {cart.map((items,i) =>(

                                    <li key={`itm-${i}_cart`}>
                                        <span>{items.name}</span>
                                        <span>${items.value}</span>
                                        <span>{`x ${items.amount}`}</span>
                                    </li>
                                
                                ))}
                            </ul>
                        </div>
                        <div className='priceTot'>
                            <h2>Total : ${CalcTot(cart)}</h2>
                        </div>
                    </div>
                    <div className="container-l-cart actif"  onClick={()=>{setIsOpen(0)}}>
                        <FaShoppingCart id="icon" />
                    </div>
                </div>
              :
                <div className='container-cart'>
                     <div className='container-r-cart close'>
                    </div>
                    <div className="container-l-cart inactif" onClick={()=>{setIsOpen(1)}}>
                        <FaShoppingCart id="icon" />
                    </div>
                </div>
            )
        )
     
}