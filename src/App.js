import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Search from './Search'
import List from './List'
import './App.css';
import ItemDetail from './ItemDetail';

function App (){
      return(         
        <div>     
          <BrowserRouter forceRefresh={true}>
            <Route path="/"  render={() => <Search />} />
            <Route path="/items" exact  render={(home)=>{
              const params = new URLSearchParams(home.location.search)                
              const query = params.get("q")
                return <List query = {query}/>}} />              
            <Route path="/items/:id" exact render={(home) =>                
              <ItemDetail id = {home.match.params.id}/>}  />                                                   
          </BrowserRouter>               
        </div>              
      )
    };
export default App;
