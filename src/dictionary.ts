export function replaceWithDictionary(
    input: string,
    dictionary: Record<string, string>
): string {
    return input.replace(/\$(\w+)\$/g, (_, key) => dictionary[key] || `$${key}$`);
}
