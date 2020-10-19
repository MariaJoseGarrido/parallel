import React from "react";
import { Link } from "react-router-dom";
import { CardImg, CardBody, CardSubtitle, CardText } from "reactstrap";
import { Proyects } from "../json/proyects.json";

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
                  <CardSubtitle className="title">
                    {element.technology}
                  </CardSubtitle>
                  <a href={element.demo}> Demo</a>
                  <a href={element.repo}> Repositorio</a>
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
