import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Card, Placeholder } from "react-bootstrap";
import card from "./components/markdow.module.css";
import { marked } from "marked";


const MARK_TEXT = `
# Markdown in Jupyter Notebook

In this tutorial, you'll learn how to use and write with different markup tags in Jupyter Notebook.

1. Headings
2. Bold
3. Italic
4. Strikeout
5. Bullets
6. Numbered lists
7. Indented quoting
8. Line breaks
9. Image
10. Links
11. Code Blocks
12. Mathematical symbols
13. Horizontal Lines
14. Tables
15. Checkbox lists

# 1. Headings

Use #s followed by a blank space for notebook titles and section headings:

# Title (H1)
## Major headings (H2)
### Subheadings (H3)
#### 4th level Subheadings (H4)

# 2. Bold

1.  '**' i.e. 'double asterisk' 

**This is bold text**



2. '__' i.e. 'double underscore'

__This is bold text__

# 3. Italic

1.'Single asterisk' i.e. '*'

*This is italic text*

2.'Single underscore' i.e. '_'

_This is Italic text_


# 4. Strikeout

1.'Single Tilde' i.e. '~'

~~This is strikeout text~~


# 5. Bullets: 

1.Circular bullet:
Use the dash sign ( - ) with a space after it or Use the asterisk sign (*) with a space after it.



2.Sub bullet:
To create a sub bullet, use a tab followed a dash and a space. You can also use an asterisk instead of a dash, and it works the interchangeably.

- This is a bullet 
    - This is a sub bullet

* the is a bullet
    * this is a sub bullet
    
* the is a bullet
    - This is a sub bullet

# 6. Numbered lists: 

Start with 1. followed by a space, then it starts numbering for you. Start each line with some number and a period, then a space. Tab to indent to get subnumbering.

1. Line number one
2. Line numer two
    
    1. Sub line number one
    2. Sub line number two

# 7. Indented quoting: 

Use a greater than sign (>) and then a space, then type the text. The text is indented and has a gray horizontal line to the left of it until the next carriage return.

> This is 1st line of Blockquotes

> This is 2nd line of Blockquotes

# 8. Line breaks: 

Use code \'&lt;br\>' to create line breaks

**Without break:**

1st line
2nd line 

**With break:**

1st line <br>
2nd line

# 9. Image

You can attach image files directly to a notebook in Markdown cells. Drag and drop your images to the Mardown cell to attach it to the notebook.

![Jupyter](attachment:download.png)

or you can you can provide a URL image link (Note that images typically start with an exclaimation point)

![Python](https://www.freecodecamp.org/news/content/images/size/w2000/2020/05/Python-language.png)

# 10. Links: 

Use bracketed text followed by the URL wrapped in parenthesis to create links! 
[link text](http://url)

Example:
[Click here to Google](https://www.google.com/)


# 11. Code Blocks

Use back ticks to create code blocks to better display coding.

\`\`\`python
x = f(y)
print(x)
\`\`\`

You can also place code inline with single back ticks like this. \`x = f(y)\`

# 12. Mathematical symbols

Use dollar signs to create  $ mathematical symbols $

$√$ 500 $-$ 5 $×$ 10 $÷$ 100 $=$ ?

# 13. Horizonatal Lines

Use 3 underscores to create horizontal line break

___

or you can use 3 hyphens to create a horizontal line break

---

# 14. Create Tables

Use the pipe symbol to create column splits. 

The first row will be the table headers followed by the second row which must be hyphens to start the table. (Note: you only need one hyphen for the 2nd row) 

The following rows can include the content to fill out the table. Make sure you keep the same amount of columns seperated by the pipe symbol. 

First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column


First Header | Second Header | Third Header
--- | --- | ---
Content from cell 1 | Content from cell 2 | Content from cell 3
Content in the first column | Content in the second column | Content in the third column

# 15. Checkbox list
You can create checkbox lists similar to bulleted list by just including brackets. 

Completed items will include an X while uncompleted items will be left empty.

- [x] This is a complete item
- [ ] This is an incomplete item
- [ ] - [ ] This is an incomplete item


`

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
                placeholder={MARK_TEXT}
              ></textarea>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default App;
