import React from 'react';
import "./Searcher.css"
interface ISearchName{
  searcher:string,
  setSearcher: React.Dispatch<React.SetStateAction<string>>;
}



const Searcher = ({searcher, setSearcher}:ISearchName) => {
  return (
    <div className="searcher-container">
        <input placeholder="searcher" type="text" value={searcher} onChange={e=>setSearcher(e.target.value)}/>
        <button onClick={()=>setSearcher('')}>clear</button>
    </div>
  );
};

export default Searcher;