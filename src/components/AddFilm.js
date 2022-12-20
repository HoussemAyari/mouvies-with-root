import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from 'uuid';

function AddFilm({addFilm}) {
  const [newFilm,setNewFilm]=useState({id:'',title:'',poster:'',decription:'',rate:''});
  const handelTextChange=(e)=>{
    setNewFilm({...newFilm,id:uuidv4(),title:e.target.value})
  }

  const handelImgChange=(e)=>{
    setNewFilm({...newFilm,poster:e.target.value})
  }

  const handelDescriptionChange=(e)=>{
    setNewFilm({...newFilm,decription:e.target.value})
  }
 
  const handelRateChange=(e)=>{
    setNewFilm({...newFilm,rate:e.target.value})

  }
  const handelSubmit=(event)=>{
    event.preventDefault();
     addFilm(newFilm);
  

  }
  return (
    <div>
      <Form style={{ width: "55rem", display: "flex" }} onSubmit={handelSubmit}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Nom du Film</Form.Label>
          <Form.Control type="text" placeholder="Enter le nom du film" onChange={handelTextChange} />
          <Form.Text className="text-muted">
            Ecrire le nom de votre film
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Description" onChange={handelDescriptionChange}/>
          <Form.Text className="text-muted">Ecrire la Description</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Image</Form.Label>
          <Form.Control type="link" placeholder="Lien" onChange={handelImgChange}/>
          <Form.Text className="text-muted">
            Entrer le lien de l'image
          </Form.Text>
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicText"
          style={{ width: "3rem" }}
        >
          <Form.Label>Rate</Form.Label>
          <Form.Control type="number" placeholder="Rate" min={1} max={5} onChange={handelRateChange} />
          <Form.Text className="text-muted">Rate</Form.Text>
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          style={{ height: "35px", marginTop: "30px" }}
          onSubmit={handelSubmit}
        >
          Ajouter
        </Button>
      </Form>
    </div>
  );
}

export default AddFilm;
