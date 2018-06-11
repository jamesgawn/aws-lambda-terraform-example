const bunyan = require('bunyan');

exports.handler = async (event, context) => {
	let log = bunyan.createLogger({name: 'lambda-example', requestId: context.awsRequestId});

	log.info({
		event: event,
		context: context
	});

	try {

		log.info('Hello World');
		return 'Hello World';

	} catch (err) {

		Promise.reject(err);

	}
};