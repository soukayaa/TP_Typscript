import { Stack } from "../src/stack";

test("Stack générique - opérations push et pop", () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.pop()).toBe(1);
    expect(stack.isEmpty()).toBe(true);
});
