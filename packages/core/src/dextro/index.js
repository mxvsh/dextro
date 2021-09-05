const express = require("express");
const cors = require("cors");
const path = require("path");
const Form = require("./form");

const webFolder = path.join(__dirname, "..", "web");

const app = express();

app.use(cors());
app.use(express.static(webFolder));
app.use(express.json());

class Dextro {
  forms = [];

  constructor() {
    this.handler();
  }

  handler() {
    app.get("/", (req, res) => {
      res.sendFile(webFolder + "/index.html");
    });

    app.get("/fields", (req, res) => {
      res.json(this.forms);
    });
  }

  newForm(name) {
    const form = new Form(name);
    this.forms.push(form);

    return form;
  }

  start(port = 4000) {
    app.listen(port, () => console.log(`server on ${port}`));
  }
}

module.exports = Dextro;
