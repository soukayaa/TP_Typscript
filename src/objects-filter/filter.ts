import fs from 'fs/promises';

// Filtrer des objets en mémoire
export function filterObjects(
    objects: Record<string, any>[],
    criteria: Record<string, any>
): Record<string, any>[] {
    return objects.filter((obj) =>
        Object.entries(criteria).every(([key, value]) => obj[key] === value)
    );
}

// Lire des objets à partir d'un fichier JSON
export async function getObjectsFromFile(filePath: string): Promise<Record<string, any>[]> {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
}

// Filtrer des objets à partir d'un fichier JSON
export async function filterObjectsFromFile(
    filePath: string,
    criteria: Record<string, any>
): Promise<Record<string, any>[]> {
    const objects = await getObjectsFromFile(filePath);
    return filterObjects(objects, criteria);
}

// Journaliser une requête pour le filtre
export function logQuery(criteria: Record<string, any>): void {
    const queryString = Object.entries(criteria)
        .map(([key, value]) => {
            const formattedValue = typeof value === "number" ? value : `"${value}"`;
            return `"${key}" = ${formattedValue}`;
        })
        .join(' AND ');
    console.log(`Filter: WHERE ${queryString}`);
}
