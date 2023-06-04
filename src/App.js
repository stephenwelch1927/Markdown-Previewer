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
      markText: `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

`

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
              value={this.state.message}
              contentEditable={true}
              placeholder={this.state.markText}
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
                placeholder={this.state.markText}
              ></textarea>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default App;
