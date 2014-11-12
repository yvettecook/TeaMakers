'use strict';

var Makeathon = require('../src/makeathon');



describe('a makeathon', function(){

	it('should have a name', function(){
		var september = new Makeathon({ name: 'September 2014' });
		expect(september.name).toEqual('September 2014')
	});

	it('has an id', function(){
		var september = new Makeathon();
		expect(september._id).not.toBe(null);
	});

	it('has a unique id', function(){
		var september = new Makeathon();
		var october = new Makeathon();
		expect(september._id).not.toEqual(october._id);
	});
});