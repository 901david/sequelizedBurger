var express = require('express');
var burger = require('../models/burger.js');
var router = express.Router();


// Routes needed
// Get route to grab all burgers from table
router.get("/", (req, res)=>{
  burger.all((data)=> {
    var burgersDBInfo = {
      burgers: data
    };
    res.render ("index", burgersDBInfo);
  });
});
// Post route to create a new burger
router.post("/", (req, res)=> {
  console.log(req.body);
  burger.create(req.body, ()=>{
    res.redirect("/");
  });
});
router.put("/:id/:bool", (req, res)=> {
  let conditionObj = {id: req.params.id};
  if (req.params.bool === "0") {
    burger.update({devoured: true}, conditionObj, ()=>{
      res.redirect("/");
    });
  }
  else {
    burger.update({devoured: false}, conditionObj, ()=>{
      res.redirect("/");
    });
  }


});
router.delete("/:id", (req, res)=> {
  burger.delete({id: req.params.id}, ()=>{
    res.redirect("/");
  });
});

module.exports = router;
