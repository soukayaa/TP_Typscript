import { filterObjectsFromFile, logQuery } from './filter';

async function main() {
    const criteria = { name: "John", age: 25 };
    const filePath = './data/users.json';

    const result = await filterObjectsFromFile(filePath, criteria);
    logQuery(criteria);
    console.log(result);
}

main();
