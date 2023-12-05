const { assert } = require('chai')
const request = require('supertest')
const app = require('../app')

describe('Frase', function () {
    describe ('Obtener una frase', function (){
        it.only('Obtener una frase random de una frase (texto)', function(done){
            request(app)
            .get('/phrases/1/random')
            .expect(200)
            .end(function(err, res){
                assert.isNotNull(res.body);
                if(err) return done(err)
                return done()
            })
        })
    })
})