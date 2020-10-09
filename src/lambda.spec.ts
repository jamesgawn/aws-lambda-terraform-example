import {handler} from "./lambda";
import bunyan from "bunyan";

jest.mock("bunyan", () => ({
  createLogger: jest.fn()
}));
const mockedBunyan: jest.Mocked<typeof bunyan> = bunyan as any;

describe("Lambda", function() {
  const infoMock: jest.Mock<void> = jest.fn();
  const errorMock: jest.Mock<void> = jest.fn();
  beforeEach(() => {
    mockedBunyan.createLogger.mockReturnValue({
      info: infoMock,
      error: errorMock
    } as any);
    infoMock.mockClear();
    errorMock.mockClear();
  });
  describe("handler", function() {
    it("successfully respond to request", async () => {
      const context = {
        awsRequestId: "testId"
      };
      const result = await handler({} as any, context as any, {} as any);
      expect(mockedBunyan.createLogger).toBeCalledWith({
        name: "lambda-example",
        requestId: "testId"
      });
      expect(result).toBe("Hello World");
      expect(infoMock).toHaveBeenNthCalledWith(1, {
        event: {},
        context: context
      });
      expect(infoMock).toHaveBeenNthCalledWith(2, "Hello World");
    });
  });
});
