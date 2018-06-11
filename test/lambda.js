const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
const fs = require('fs');
const path = require('path');
chai.use(require('sinon-chai'));

let lambda = require('../lambda');

describe('Lambda Test', function() {

	beforeEach(function () {
		callback = sinon.spy();
	});

	describe('handler', function() {
		it('successfully response for handler', async () => {
			event = JSON.parse(fs.readFileSync(path.join(__dirname + '/data/example-event.json')), 'utf8');
			context = JSON.parse(fs.readFileSync(path.join(__dirname + '/data/example-context.json')), 'utf8');

			let result = await lambda.handler(event, context);

			expect(result).to.equal('Hello World');
		});

	});

});