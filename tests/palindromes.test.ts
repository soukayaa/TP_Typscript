import { findPalindromes } from "../src/palindromes";

test("Trouver les palindromes dans une phrase", () => {
    const input = "Le radar a vu Anna avec un kayak et un autre radar.";
    const result = findPalindromes(input);
    expect(result).toEqual(["RADAR", "ANNA", "KAYAK"]);
});
