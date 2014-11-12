'use strict';

var Makeathon = require('../src/makeathon');



describe('a makeathon', function(){

	it('should have a name', function(){
		var september = new Makeathon({ name: 'September 2014' });
		expect(september.name).toEqual('September 2014')
	});
});