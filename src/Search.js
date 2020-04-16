import React, { useState,useEffect } from 'react'
import './assets/css/Search.css'
//import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';



function Search (props) {    
    const [redirect,setRedirect] = useState(false)
    const [query,setQuery] = useState("")        
    const history = useHistory()     
    
    const onChange=(e) =>{                       
        setQuery(e.target.value)                                
        
    }
    useEffect(() => {                
        setRedirect(false)        
      },[])
    
    const onKeyPress=(e)=>{
        console.log(query)        
        console.log(redirect)
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
                        <img className= "logo" alt="" src="./Logo_ML.png"/>                   
                        <input className="search" placeholder="Nunca dejes de buscar" type="text" onChange={onChange}onKeyPress={onKeyPress}></input>
                        <img className="lupa"  type="image" alt=""  src="./ic_Search.png" onClick={onClick}></img>                        
                    </div>                    
                    {
                     //   (redirect)?
                     //       <Redirect  to={{pathname:"/items",search:`?q=:${query}`, state: { query: query }}}/>                                                
                      //  :""                        

                    }                            
                </div>                                                                          
            </React.Fragment>                        

            );
    //}
    
}

export default Search;