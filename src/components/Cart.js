import {FaShoppingCart} from 'react-icons/fa';
import './../styles/Cart.css';
import { useState } from 'react';

export default function Cart(){

    const [isOpen,setIsOpen] = useState(0);

        return(
            ( isOpen ?
                <div className='container-cart'>
                    <div className='container-r-cart open'>
                        <ul>
                            <li>Panier vide...</li>
                        </ul>
                    </div>
                    <div className="container-l-cart actif"  onClick={()=>{setIsOpen(0)}}>
                        <FaShoppingCart id="icon" />
                    </div>
                </div>
              :
                <div className='container-cart'>
                     <div className='container-r-cart close'>
                        <ul>
                            <li>Panier vide...</li>
                        </ul>
                    </div>
                    <div className="container-l-cart inactif" onClick={()=>{setIsOpen(1)}}>
                        <FaShoppingCart id="icon" />
                    </div>
                </div>
            )
        )
     
}