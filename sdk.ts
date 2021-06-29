export function getInput() {
  return JSON.parse(Deno.args[0]); 
}

export function setOutput(output: Record<string, unknown>) {
  Deno.stdout.writeSync(new TextEncoder().encode(JSON.stringify(output))); 
}
