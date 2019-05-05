describe("Connection", () => {
  describe("ttl", () => {
    it("should set the ttl to the number provided if it's not defined");
    it("should not set the ttl to the number provided if it's already defined");
  });
  describe("timestamp", () => {
    it("should return the timestamp set in the constructor");
  });
  describe("address", () => {
    it("should return the address from the request object passed to the constructor");
  });
  describe("valid", () => {
    it("should return true if ttl is less then 1");
    it("should return true if current timestamp is less then connection timestamp + ttl");
    it("should return false if current timestamp is greater then connection timestamp + ttl");
  });
});
