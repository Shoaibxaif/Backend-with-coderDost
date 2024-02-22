const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./public/data.json', 'utf-8'));
const user = data.products;

exports.CreateModel = (req, res) => {
    console.log(req.body);
    user.push(req.body);
    res.status(201).json(req.body);
  }


  exports.getAllModels = (req, res) => {
    res.json(user);
  }
  
  
exports.getModelById = (req, res) => {
    const id = +req.params.id;
    const user = user.find(p => p.id === id);
    res.json(user);
  }
  
exports.updateModel = (req, res) => {
    const id = +req.params.id;
    const userIndex = user.findIndex(p => p.id === id);
    user.splice(userIndex, 1, { ...req.body, id: id });
    res.status(201).json();
  }
  
  exports.updatePartialModel = (req, res) => {
    const id = +req.params.id;
    const userIndex = user.findIndex(p => p.id === id);
    const product = user[userIndex];
    user.splice(userIndex, 1, { ...product, ...req.body });
    res.status(201).json();
  }
  
exports.deleteModel = (req, res) => {
    const id = +req.params.id;
    const userIndex = user.findIndex(p => p.id === id);
    const product = user[userIndex];
    user.splice(userIndex, 1);
    res.status(201).json(product);
  }
  
