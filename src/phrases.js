const {Phrases} = require('../db/models')

async function getPhraseByID(id) {
   let aux = await Phrases.findByPk(id)
   let phrase = obtenerFraseRandom(aux.dataValues.phrase)
   console.log(phrase)
   return phrase
}

function obtenerFraseRandom(fraseEntera){
    var frases = fraseEntera.split('.'); // Spliteo la frase por puntos.
    var index = Math.floor(Math.random() * frases.length); // Obtengo la frase random del la frase entera.
    return frases[index]; // Retorno la frase random.
}


module.exports = {
    getPhraseByID,
    obtenerFraseRandom,
}