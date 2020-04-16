const Router  = require("express")
const router =Router();
const fetch = require("node-fetch")


router.get('/api/:query?',async (req,res) =>{        
    const query = req.params.query
    const api_url = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`
    const fetch_response = await  fetch(api_url);
    const json =  await fetch_response.json();        
    let arrayfilters = [...json.filters]
    let arrayvalues=[]
    let arraycat=[]    
    let arrayitems=[]
    json.filters.map((item) =>{                
        if (item.id == "category"){                   
            arrayvalues = [...item.values[0].path_from_root]            
        }        
    })            
    arrayvalues.map((item) =>{
        console.log(item.name)
        arraycat.push(item.name)
    })              
    json.results.map((item)=>{
        arrayitems.push(
            {
                id:item .id,
                title:item.title,
                price:{
                    currency: item.currency_id,
                    amount: item.price                    
                },
                picture: item.thumbnail,
                condition: item.condition,
                free_shipping: item.shipping.free_shipping,
                addres: item.address.state_name
            }
        )
    })    
    res.json({autor:{
        nombre: "Federico",
        apellido: "Zenobi"
        },
        categories: [...arraycat],
        items:[...arrayitems]
    })        
});


router.get('/api/items/:id',async (req,res) =>{    
    const id = req.params.id
    let api_url = `https://api.mercadolibre.com/items/${id}/description`
    let fetch_response = await  fetch(api_url);
    let json =  await fetch_response.json();        
    const description = json.plain_text       
    api_url = `https://api.mercadolibre.com/items/${id}`
    fetch_response = await  fetch(api_url);
    json =  await fetch_response.json();                    
    res.json({
        autor : {
        name: "Federico",
        lastname: "Zenobi"                
        },
        item :{
        id:json.id,        
        title: json.title,
        price:{
            currency: json.currency_id,
            amount: json.price,
            decimals: json.decimals
        },
        picture: json.thumbnail,
        condition: json.condition,
        free_shiping: json.free_methods,
        sold_quantity: json.sold_quantity,
        description: description
    }    
    });  
});

module.exports = router;