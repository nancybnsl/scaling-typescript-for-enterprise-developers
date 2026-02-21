import { describe,it,expect } from "vitest";
import { printCity, type City } from "./script";
describe("Sample Test", () => {
    const city:City = {
        name: "Berlin",
        country: "Germany"
    };  
    it("should print city name and country", () => {
        const result = printCity(city);
        expect(result).toBe("Berlin, Germany");
    });
});