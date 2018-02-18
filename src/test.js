var should =require('chai').should()
var expect = require('chai').expect
var supertest = require('supertest')
var assert = require('chai').assert



var api = supertest('http://localhost:3000')


describe('a basic test',function(){
	it('should pass when everything is okay',function(){
		expect(true).to.be.true;
	})
})

// describe('GET',function(){
// 	describe('get gif request from api',function(){
// 		it('should grab data and give 200 response', function(done){

// 			api.get('https://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=aDwpw0FkNBMm4J7e2jQNoD7Q0VvgT79b')
// 			.set('Accept','application/json').expect(200,done)

// 		})
// 	})
// })

// describe('upperCase',function(){
// 	it('should capitalize the first letter',function(){
// 		assert.equal(upperCase('hello'),'Hello')
// 	})
// })

// describe('banner',function(){
// 	it('set state to true or false', function(){
// 		expect(banner).to.equal(true||false)
// 	})
// })




