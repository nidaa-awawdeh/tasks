const express = require("express");
const router = express.Router();
const items = [];
var id = 1;


router.get("/items", (req, res) => {
    return res.json(items);
});

router.post("/items", (req, res) => {
    items.push({
        nameitems: req.body.nameitems,
        id: ++id,
        price:req.body.price

    });
    return res.json({ message: "accept form data and add it to the shopping list" });
})

router.get("/items/:id", (req, res) => {
    
    const item = items.find(val => val.id === Number(req.params.id));
    return res.json(item);
})

router.patch("/items/:id", (req, res) => {
    items.nameitems = req.body.nameitems;
    return res.json({ message: " edits to existing items" });

});

router.delete("/items/:id", (req, res) => {
    
})

module.exports = router;

