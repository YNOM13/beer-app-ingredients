import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import {useBeersStore} from "../../../store";
import "./NestedModal.css"

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius:'10px',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  overflow:'auto',
  maxHeight:'500px'
};


export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const {selectedBeer, deleteBeer, } = useBeersStore(state => state)

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>receipts</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
          <div>
            {!selectedBeer.length ? <h2>Nothing...</h2> : selectedBeer.map(i=>(
              <div className="modal-content" key={i.id}>
                <div className="main-block-modal">
                  <div className="title-modal">
                    {i.name}
                  </div>
                  <div className="ingredients-modal">
                    {i.ingredients.map((i,ind)=><div
                      className="ingredients-modal-element"
                      key={ind}
                    >
                      {i}
                    </div>)}
                  </div>
                </div>

                <img className="img-of-beer-modal" src={i.image_url} alt=""/>

                <ChildModal description={i.description} />
                <button className="button-delete" onClick={()=>deleteBeer(i.id)}>Delete</button>
              </div>
            ))}
          </div>
        </Box>
      </Modal>
    </div>
  );
}

interface ChildModalProps {
  description:string,
}

function ChildModal({ description}:ChildModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <button className="button-more" onClick={handleOpen}>More info</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2>Description:</h2>
          <div className="description-modal">
            {description}
          </div>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
