import { sum } from 'https://deno.land/x/lodash@4.17.15-es/lodash.js';

export function sumBy<T extends Record<string, unknown>>(items: T[], fn: (item: T) => number) {
  return sum(items.map(i => fn(i)));
}

export function getInput() {
  return JSON.parse(Deno.args[0]); 
}

export function setOutput(output: Record<string, unknown>) {
  Deno.stdout.writeSync(new TextEncoder().encode(JSON.stringify(output))); 
}
