import React, { useState} from 'react'
import './assets/css/Search.css'
import logo from './assets/img/Logo_ML.png';
import lupa from './assets/img/ic_Search.png';
import { useHistory } from 'react-router-dom';



function Search (props) {    
    const [query,setQuery] = useState("")        
    const history = useHistory()     
    
    const onChange=(e) =>{                       
        setQuery(e.target.value)                                
        
    }
    
    const onKeyPress=(e)=>{        
        if(e.key === "Enter")
        {             
            history.push("/items?q=" + query)                              
        }
    }      
    const onClick=()=>{ 
        history.push("/items?q=" + query)                          
      }    
        return(                                            
            <React.Fragment>                                                                                
                <div className="container">
                    <div className="subcontainer">                                                        
                        <img className= "logo" alt="" src={logo}/>                   
                        <input className="search" placeholder="Nunca dejes de buscar"  type="text" onChange={onChange}onKeyPress={onKeyPress}></input>
                        <img className="lupa"  type="image" alt=""  src={lupa} onClick={onClick}></img>                        
                    </div>                                        
                </div>                                                                          
            </React.Fragment>                        

            );
    //}
    
}

export default Search;