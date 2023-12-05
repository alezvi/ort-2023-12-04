var express = require('express');
var router = express.Router();
var phrases = require('../src/phrases');

router.get('/:id/random', async function(req, res, next) {
    try{
        const frase = await phrases.getPhraseByID(req.params.id);
        res.status(200).json(frase)
    }
    catch(e){
        console.log(e)
        res.status(500).json({message: "error"})
    }
});

module.exports = router;