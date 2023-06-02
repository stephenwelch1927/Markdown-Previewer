import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Card, Placeholder } from "react-bootstrap";
import card from "./components/markdow.module.css";
import { marked } from "marked";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
  }

  updateTextArea(message) {
    this.setState({ message });
    console.log(this.state.message);
  }

  render() {
    return (
      <div>
        <Card className={card.card1} style={{ width: "50rem" }}>
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
                Previewer
              </Card.Title>
            </section>

            <div id="preview"
              className={card.previewOutput}
              dangerouslySetInnerHTML={{ __html: marked(this.state.message) }}
            ></div>
          </Card.Body>
        </Card>
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
              <textarea id="editor"
                className={card.textArea}
                onChange={(event) => {
                  this.updateTextArea(event.target.value);
                }}
                value={this.state.message}
              ></textarea>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default App;
