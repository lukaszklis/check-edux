export function validateLogin(input: string): boolean {
    return /^s\d+$/g.test(input);
}
