var expect    = require("chai").expect;
var assert = require('chai').assert;
let eventController = require('../src/controllers/EventController');

describe("Event Controller Test", function () {
	describe("Get Events Test", function () {
		it('should return empry array', function () {
			let events = eventController.getEvents()
			//console.log(events)
			//assert.typeOf(events, 'object')
		});
	})

})