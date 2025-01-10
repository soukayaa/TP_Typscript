import { replaceWithDictionary } from "../src/dictionary";

test("Remplacer avec un dictionnaire", () => {
    const input = "$temp$ here comes the name $name$";
    const dictionary = { temp: "temporary", name: "John Doe" };
    const result = replaceWithDictionary(input, dictionary);
    expect(result).toBe("temporary here comes the name John Doe");
});
