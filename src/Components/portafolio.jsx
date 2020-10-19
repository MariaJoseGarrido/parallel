import React from "react";
import { CardImg, CardBody, CardSubtitle, CardText } from 'reactstrap'
import {Proyects} from "../json/proyects.json"

const Portafolio = () => {
  return (
    
    <div className="container">
  <div className="row">
    {Proyects.map((element) => {
      return (
        <div className="col-md-6 col-lg-4">
          <div className="card mx-0 my-3">
            <CardImg src={element.img} alt="" />
            <CardBody>
              <CardSubtitle className="title">{element.title}</CardSubtitle>
              <CardText> {element.description}</CardText>
              <CardSubtitle className="title">{element.technology}</CardSubtitle>
              <button type="button" class="btn btn-light">Demo</button>
              <button type="button" class="btn btn-light">Repositorio</button>
            </CardBody>
          </div>
        </div>
      );
    })}
  </div>
</div>
  );
};
export default Portafolio;


