import React from 'react';
import {IBeer, useBeersStore} from "../../store";
import "./Beer.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Ingredients from "./Ingredients/Ingredients";


interface IBeerProps {
  beer: IBeer,
}

const Beer = ({beer}:IBeerProps) => {
  const {name,image_url,description,ingredients} = beer
  const {handleSelectBeer} = useBeersStore(state => state)


  return (
    <Card className="beer-card" sx={{ maxWidth: 345 }}>
      {/*<CardMedia
        sx={{ height:125, width:'25px' }}
        image={image_url}
        title={name}
      />*/}

      <img className="img-of-beer" src={image_url} alt=""/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography className="title-ingredients" gutterBottom variant="h5" component="div">
          Ingredients
        </Typography>
      </CardContent>
        <Typography className="ingredients-elements" variant="body2" color="text.secondary">
          <Ingredients ingredients={ingredients}/>
        </Typography>
      <CardActions className="beer-card-action-buttons">
        <Button onClick={()=>handleSelectBeer(beer)} size="small">Add</Button>
      </CardActions>
    </Card>
  );
};

export default Beer;