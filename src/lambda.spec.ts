const lambda = require("../src/lambda");

describe("Lambda", function() {
  describe("handler", function() {
    it("successfully respond to request", async () => {
      const result = await lambda.handler({}, {
        awsRequestId: "testId"
      });
      expect(result).toBe("Hello World");
    });
  });
});
