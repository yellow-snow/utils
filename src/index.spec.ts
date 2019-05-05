// tslint:disable:no-unused-expression
import { expect } from "chai";
import { RateLimit } from "./";

describe("src", () => {
    describe("@RateLimit", () => {
        it("should not be undefined", () => {
            expect(RateLimit).not.to.be.undefined;
        });
    });
});
