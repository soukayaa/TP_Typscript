import { filterObjects, filterObjectsFromFile, logQuery } from '../src/objects-filter/filter';
import path from 'path';

describe("filterObjects", () => {
    it("should filter objects in memory based on criteria", () => {
        const objects = [
            { name: "John", age: 25 },
            { name: "Jane", age: 30 },
            { name: "John", age: 30 }
        ];
        const criteria = { name: "John", age: 25 };
        const result = filterObjects(objects, criteria);
        expect(result).toEqual([{ name: "John", age: 25 }]);
    });

    it("should return an empty array if no object matches", () => {
        const objects = [
            { name: "John", age: 25 },
            { name: "Jane", age: 30 }
        ];
        const criteria = { name: "Nonexistent" };
        const result = filterObjects(objects, criteria);
        expect(result).toEqual([]);
    });
});

describe("filterObjectsFromFile", () => {
    it("should filter objects from a JSON file", async () => {
        const filePath = path.join(__dirname, '../data/users.json');
        const criteria = { name: "John", age: 25 };

        const result = await filterObjectsFromFile(filePath, criteria);
        expect(result).toEqual([{ name: "John", age: 25 }]);
    });

    it("should return an empty array if no object matches in the file", async () => {
        const filePath = path.join(__dirname, '../data/users.json');
        const criteria = { name: "Nonexistent" };

        const result = await filterObjectsFromFile(filePath, criteria);
        expect(result).toEqual([]);
    });
});

describe("logQuery", () => {
    it("should log the correct query string", () => {
        const criteria = { name: "John", age: 25 };
        console.log = jest.fn(); // Mock console.log

        logQuery(criteria);
        expect(console.log).toHaveBeenCalledWith('Filter: WHERE "name" = "John" AND "age" = 25');
    });
});
