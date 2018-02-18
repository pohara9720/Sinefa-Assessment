var describe = require('mocha').describe
var it = require('mocha').it
var expect = require('chai').expect
var assert = require('chai').assert
var axios = require ('axios')

function upperCase(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
}
function banner (state) {
    return state === true || false
}


describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function(){
            assert.equal(-1, [1,2,3].indexOf(4))
        })
    })
})

describe('a basic test',function(){
    it('should pass when everything is okay',function(){
        expect(true).to.be.true
    })
})

describe('get',function(){
    describe('get gif request from api',function(){
        it('should grab data and give 200 response', function(){
            axios.get('http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=aDwpw0FkNBMm4J7e2jQNoD7Q0VvgT79b').then(function (response) {
                expect(response.status).to.equal(200)
            })
                .catch(function (error) {
                    console.log(error)
                })
        })
    })
}) 

describe('upperCase',function(){
    it('should capitalize the first letter',function(){
        assert.equal(upperCase('hello'),'Hello')
    })
})

describe('banner',function(){
    it('set state to true or false', function(){
        expect(banner()).to.equal(true && false)
    })
})








