describe("ConnectionList", () => {
  describe("push", () => {
    it("should set connection's ttl");
    it("should save connection");
  });
  describe("clean", () => {
    it("should remove invalid connections");
  });
  describe("allowed", () => {
    it("should return true if connection limit not exceeded");
    it("should return trufalsee if connection limit exceeded");
  });
});
