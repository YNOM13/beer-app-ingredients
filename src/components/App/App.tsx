import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import { useBeersStore } from "../../store";
import Beers from "../Beers/Beers";
import Header from "../Header/Header";
import Searcher from "../Searcher/Searcher";
import Loader from "../UI/Loader/Loader";
import Pagination from "../UI/Pagination/Pagination";



function App() {
 const { fetchBeer, beers, isLoading } = useBeersStore(state => state);
 const [searcher, setSearcher] = useState('');
 const [beerPerPage] = useState(5);
 const [currentPage, setCurrentPage] = useState(1)


 useEffect(()=>{
  fetchBeer()
 },[])


 const filteredBeer = useMemo(() => {
  return beers.filter(i => i.name.toLowerCase().includes(searcher.toLowerCase()));
 }, [beers, searcher]);


 const lastBeerIndex = currentPage * beerPerPage
 const firstBeerIndex = lastBeerIndex - beerPerPage
 const currentBeer = beers.slice(firstBeerIndex,lastBeerIndex)
 const paginate = (pageNumber:number) => {
  return setCurrentPage(pageNumber)
 }


 return (
   <div className="wrapper">
    <Header />
    <Searcher searcher={searcher} setSearcher={setSearcher} />
    {isLoading ? (
      <Loader />
    ) : (
      <Beers
        beers={searcher.trim() ? filteredBeer : currentBeer}
      />
    )}
    <Pagination beerPerPage={beerPerPage} totalBeers={beers.length} paginate={paginate}/>
   </div>
 );
}

export default App;
