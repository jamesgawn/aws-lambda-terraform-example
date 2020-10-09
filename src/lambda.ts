import {APIGatewayProxyHandlerV2} from "aws-lambda";
const bunyan = require("bunyan");

export const handler : APIGatewayProxyHandlerV2<string> = async (event, context) => {
  const log = bunyan.createLogger({name: "lambda-example", requestId: context.awsRequestId});
  log.info({
    event: event,
    context: context
  });
  log.info("Hello World");
  return "Hello World";
};
