import React from "react";
import { Card } from "react-bootstrap";
import card from "./markdow.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class TextArea extends React.Component {
  render() {
    return (
      <div>
        <Card className={card.card} style={{ width: "50rem" }}>
          <Card.Body>
            <section style={{background: "rgba(192,192,192,0.3)", height: "30px"}}>
            <Card.Title style={{fontSize: "20px", textAlign: "center", textShadow: "1px 1px" }}>Editor</Card.Title>
            </section>
                <div className={card.textArea}>
                <textarea style={{width: "48rem", overflowY: "scroll"}}></textarea>
                </div>  
          
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default TextArea;
