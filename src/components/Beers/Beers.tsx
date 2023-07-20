import React from 'react';
import { IBeer } from "../../store";
import Beer from "../Beer/Beer";

interface IBeersProps {
  beers: IBeer[];
}

const Beers: React.FC<IBeersProps> = ({ beers, }) => {

  if (!beers.length) {
    return (
      <h3 className="container">
        Unknown beer
      </h3>
    );
  }

  return (
    <div className="container">
      {beers.map((beerElement) => (
        <Beer
          key={beerElement.id}
          beer={beerElement}
        />
      ))}
    </div>
  );
};

export default Beers;
