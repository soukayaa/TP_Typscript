export function logQuery(criteria: Record<string, any>): void {
    const query = Object.entries(criteria)
        .map(([key, value]) => `"${key}" = "${value}"`)
        .join(" AND ");
    console.log(`Filter : WHERE ${query}`);
}
