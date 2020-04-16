import React ,{ useEffect,useState } from 'react';
import "./assets/css/Item.css";
import {Link} from 'react-router-dom'

function Item (props){
    const [currentCurrency,setCurretCurrency] = useState("")  
    const [decimalprice,setDecimalPrice] = useState(0)  
    const [free_shipping,setShipping] = useState("")      
        
    useEffect(() => {                
        const setDecimal=(()=>{
            setDecimalPrice(parseFloat(props.item.price.amount).toFixed(props.item.price.decimals)) 
    
         })
        const setCurrency=(()=>{                
            if (props.item.price.currency === 'ARS'){
                setCurretCurrency ("$")
            }
            else{
                setCurretCurrency ("U$S")
            }            
    
        })
        const setFreeShipping=()=>{                
            if(props.item.free_shipping)
                setShipping("ic_shipping.png")                         
        }
        setDecimal()    
        setCurrency()
        setFreeShipping()
      },[props.item.price.amount,props.item.price.decimals,props.item.price.currency,props.item.free_shipping])     
                         
        return(                        
            <div className="item">                                                                                                    
                <div className="image"><input className="submit"  type="image" alt="" src={props.item.picture} id={props.item.id}/></div>                            
                <div className="descbox">
                    <div className="price">{currentCurrency} {decimalprice} {
                                                                                (props.item.free_shipping)? 
                                                                                    <img alt="" src={free_shipping}></img>
                                                                                :""                                                                                                                                                                            
                                                                            }
                    </div>
                    <div className="desc"><p  className="p" id={props.item.id}><Link to={{pathname: "/items/" + props.item.id }}> {props.item.title}</Link></p></div>
                    <div className="des2"> </div>
                </div>            
                    <div className="locbox">
                        <div className="loc">{props.item.addres}</div>
                    </div>                                                           
            </div>                               
        );
    }
export default Item;