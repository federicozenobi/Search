import React ,{ useEffect,useState } from 'react';
import "./assets/css/ItemDetail.css";



function ItemDetail (props){    
    const [item,setItem] = useState({})
    const [decimalprice,setDecimalPrice] = useState(0)  
    const [currentCurrency,setCurretCurrency] = useState("")  
    const [condition,setCondition] = useState("")  
    const [error,setError] = useState(true)
    useEffect(() => {                
        const getItem= async()=>{        
            const res = await fetch(`//localhost:3001/api/Items/${props.id}`)            
            const json = await res.json()                
            if (json.error)
                setError(json)
            else{
                setError(false)
                setItem(json.item)                
                setDecimal(json.item.price.amount,2)
                setCurrency(json.item.price.currency)
                setConditionItem(json.item.condition)                 
            }
        }
        getItem()                        
      },[props])
    
    const setConditionItem=((condition)=>{                
        if (condition === "new" || condition === "nuevo")
            setCondition("Nuevo")
        else if (condition === "used" || condition === "usado")            
            setCondition("Usado")
        else                        
            setCondition(condition)


     })
    const setDecimal=((amount,dec)=>{
        setDecimalPrice(parseFloat(amount).toFixed(dec))         
     })
    const setCurrency=((curren)=>{                
        if (curren === 'ARS'){
            setCurretCurrency ("$")
        }
        else{
            setCurretCurrency ("U$S")
        }            

    })
    
        return(                        
            <React.Fragment>                    
                {
                (error)?
                    <p>{error.message}</p>
                :                                
                    <div className="itemDetail">                                                                                                    
                        <div className="image"><img alt="" src={item.picture}></img></div>                            
                        <div className="descbox">
                            <div className="tipobox">
                                <div className="tipo">{condition}</div>
                                <div className="vendidos">-{item.sold_quantity} Vendidos</div>
                            </div>
                            <div className="desc3">{item.title}</div>
                            <div className="price">{currentCurrency} {decimalprice}</div>
                            <div className="btn"><button>Comprar</button></div>                                        
                        </div>            
                            <div className="bottom">
                                <div className="titulodesc4">Descripción del producto</div>
                                <div className="desc4">{item.description}</div>
                            </div>                                                           
                    </div>          
                }                    
            </React.Fragment>                     
        );
    }
export default ItemDetail