const express = require("express");
const knex = require("../db/client");
const router = express.Router();

router.get("/new", (req, res) => {
    res.render("new");
  });
  
router.post("/new", (req, res) => {
    knex
      .insert({
        team_name: req.body.team_name,
        members_name: req.body.members_name,
        logoUrl: req.body.logo_url
      })
      .into("cohorts")
      .returning("*")
      .then(([cohort]) => {
        //console.log("Cohorts insert result:", cohort);
        res.redirect(`/cohorts/${cohort.id}`);
      });
  });
  



router.get("/:id", (req, res) => {
    let orig_quantity = req.query.qty;
    knex
    .select("*")
    .from("cohorts")
    .where({ id: req.params.id }) 
    .then(results => {
        const[cohort] = results;
        if(orig_quantity){
            let quantity = orig_quantity;
            let method = req.query.method;
            let result_arr = [];
            let str = cohort.members_name;
            let str_arr = str.split(",");
            let teamSize = (str_arr.length/quantity);
            if(method === "tcmethod"){
                while(quantity>0){
                    let sub_array = [];
                    for(let i =0; i<= teamSize-1;i ++){
                        let randomNumber = Math.floor((Math.random() * (str_arr.length -1)));
                        sub_array.push(str_arr[randomNumber]);
                        str_arr.splice(randomNumber,1);                   
                    }
                    quantity = quantity -1;
                    result_arr.push(sub_array);          
                }
                let remainder = str_arr.length;
                if(remainder > 0){
                    for(let i =0; i< remainder;i++){
                        result_arr[i].push(str_arr[i]);
                    }
                }
            }else{
                while(str_arr.length/quantity > 1){
                    let sub_array = [];
                    for(let i =0; i<= quantity-1;i ++){
                        let randomNumber = Math.floor((Math.random() * (str_arr.length -1)));
                        sub_array.push(str_arr[randomNumber]);
                        str_arr.splice(randomNumber,1);                   
                    }
                    result_arr.push(sub_array); 
                }
                let remainder = str_arr.length;
                if(remainder > 0){
                    result_arr.push(str_arr);
                }
            }
            res.render("cohort", { 
                "cohort": cohort, 
                "result": result_arr,
                "quantity": orig_quantity,
                "method":method
            });
        }
        else{
               res.render("cohort", { "cohort": cohort });
        }
        
    });
    
  });

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("cohorts")
      .then(cohort => {
        res.render("listcohort", {"cohort": cohort});
      });
  });  

  module.exports = router;
