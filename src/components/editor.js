import React from "react";
import { Card } from "react-bootstrap";
import card from "./markdow.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

class Editor extends React.Component {
  constructor(props){
    super();
  }
  
  state = {
    message: ''
  }

  onChangeTextUpdate(e){
    this.setState({
      message: e.target.value
    });
  }

  render() {
    return (
      <div>
        <Card className={card.card} style={{ width: "50rem" }}>
          <Card.Body>
            <section
              style={{ background: "rgba(192,192,192,0.3)", height: "30px" }}
            >
              <Card.Title
                style={{
                  fontSize: "20px",
                  textAlign: "center",
                  textShadow: "1px 1px",
                }}
              >
                Editor
              </Card.Title>
            </section>
            <div className={card.textArea}>
              <textarea
                className={card.textArea}
                onChange={this.onChangeTextUpdate.bind(this)}
                value={this.message}
              ></textarea>
              {console.log(this.state.message)}
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Editor;
