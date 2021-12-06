import React, {useState} from "react";
import "./index.css";

export default function StockData() {
  const [searchTerm, setSearchTerm]= useState('')
  const [loading, setLoading]= useState(true)
  const [data, setData]= useState(null)

  const handleSearch= async () =>{
    setLoading(true);
    const res= await fetch(`https://jsonmock.hackerrank.com/api/stocks?date=${searchTerm}`);
    const data= await res.json()
    console.log(data)
    setData(data.data[0]);
    setLoading(false)
  }

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input 
          type="text" 
          className="large" 
          placeholder="5-January-2000" 
          id="app-input" 
          data-testid="app-input" 
          value={searchTerm} 
          onChange={(e)=> setSearchTerm(e.target.value)}/>
        <button className="" id="submit-button" data-testid="submit-button" onClick={handleSearch}>Search</button>
      </section>
      {
        !loading && 
        data &&
          (<ul className="mt-50 slide-up-fade-in styled" id="stockData" data-testid="stock-data">
            
            <li className="py-10">Open: {data.open}</li>
            <li className="py-10">Close: {data.close}</li>
            <li className="py-10">High: {data.high}</li>
            <li className="py-10">Low: {data.low}</li>
          </ul>) }
      { !loading && !data && (<div className="mt-50 slide-up-fade-in" id="no-result" data-testid="no-result">No Results Found</div>)
      }
      
    </div>
  );
}
