import React, { useEffect,useState } from 'react'
import Item from './Item'
import "./assets/css/List.css";





function List(props){        
    const [items,setItems] = useState([])
    const [categories,setCategories] = useState([])       
    useEffect(() => {                                        
        const searchItem=async()=>{            
            const res = await fetch(`//localhost:3001/api/${props.query}`)
            const json = await res.json()          
            setItems (json.items)        
            setCategories (json.categories)
        }
        searchItem(props.query)                             
      },[props])
    
        

    return(                 
        <React.Fragment>                        
            <div className="List">  
                <div className="categories" >
                    {categories.map(cat =>
                        cat + ">"
                    )}                                                
                </div>                                                                                        
                {items.slice(0,4).map(item =>
                <Item  key={item.id} item={item} />                 
                )}
        </div>
        </React.Fragment>
        
    );
}
export default List;