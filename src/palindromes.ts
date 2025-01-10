export function findPalindromes(input: string): string[] {
    const words = input.split(/[\s.,!?]+/); // Séparer en mots
    const palindromes = new Set<string>();

    words.forEach((word) => {
        const upperWord = word.toUpperCase();
        if (upperWord === upperWord.split('').reverse().join('') && upperWord.length > 1) {
            palindromes.add(upperWord);
        }
    });

    return Array.from(palindromes);
}
