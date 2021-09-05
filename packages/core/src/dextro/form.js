class Form {
  fields = [];

  constructor(name) {
    this.name = name;
  }

  addField(field) {
    this.fields.push(field);
  }
}

module.exports = Form;
