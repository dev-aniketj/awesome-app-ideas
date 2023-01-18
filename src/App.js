import "./App.css";
import json2md from "json2md";

const App = () => {
  // set the file name by the user and generate the markdown file of the JSON File.
  const createMarkdownFile = (fileName) => {
    const data = require(`./data/${fileName}.json`);
    console.log(data);
    const dataFile = json2md(data);

    // create the Element and generate the Markdown file using Element.
    let hiddenElement = document.createElement("a");
    hiddenElement.download = `${fileName}.md`;
    let blob = new Blob([dataFile], {
      type: "text/plain",
    });
    hiddenElement.href = window.URL.createObjectURL(blob);
    hiddenElement.click();
  };

  return (
    <div className="container">
      <p className="items">
        <div className="item" onClick={() => createMarkdownFile("file1")}>
          <h3>113 Mobile App Ideas For 2023 That Haven't Been Made Yet</h3>
        </div>
        <div className="item" onClick={() => createMarkdownFile("file2")}>
          <h3>60+ Brilliant App Ideas for Startups to Launch in 2023</h3>
        </div>
        <div className="item" onClick={() => createMarkdownFile("file3")}>
          <h3>50+ Best App Ideas For 2023</h3>
        </div>
      </p>
    </div>
  );
};

export default App;
