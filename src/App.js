
import './App.css';
import React, {useState} from 'react';
import SearchBar from './SearchBar';
import Business from './Business';
import axios from 'axios';


function App() {
  const [term, setTerm]=useState("");
  const [location, setLoc] = useState("");
  const [sort_by, setSortBy] = useState("");
  const [business, setBusiness] = useState("");
  const handleTerm =(event)=>{
    setTerm(event.target.value);
    console.log(term);
  }
  const handleLoc =(event)=>{
    setLoc(event.target.value);
    console.log(location);
  }
  const handleSortBy =(event, value)=>{
    event.preventDefault();
    console.log(value);
    setSortBy(value);
    console.log(sort_by);
  }
  const api_key ='Ws-RjHm5nGbBP-L8H5cr5fNzafFa_sWV0Fix1WBcqTbLs3FcWIwlrrREJ51cxYMt0Q1Gqdd6KiujNgTxTjokZsRwsZF-sBPnb91DLoONVjCSfBuvHrBtcTbr_36hZHYx';

  const config = {
    headers: {
      Authorization:
        `Bearer ${api_key}`,
    },
    params: {
      term: term,
      location: location,
      sort_by: sort_by,
     
    },
  };  
    const search= (event) =>{
      event.preventDefault();
      console.log("hi")
        
      axios
      .get("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search", config)
      .then((response) => {
        setBusiness(response.data.businesses);
        console.log(business);
      }
        )


        
    }
    

    
   
  

  return (
    <div className="App">
      <h1 className="title">ravenous</h1>
      <SearchBar 
              handleTerm ={handleTerm} 
              handleLoc={handleLoc} 
              handleSortBy={handleSortBy}
              search={search} />

    
      <Business business={business}/>
      

    </div>
  );
}

export default App;
