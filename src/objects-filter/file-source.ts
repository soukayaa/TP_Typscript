import * as fs from 'fs/promises';

export async function getObjectsFromFile(filePath: string): Promise<Record<string, any>[]> {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        console.error(`Erreur lors de la lecture du fichier ${filePath}:`, err);
        return [];
        
    }
}
