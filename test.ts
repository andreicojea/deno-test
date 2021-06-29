import { sumBy } from 'https://deno.land/x/lodash@4.17.15-es/lodash.js';;
const {a,b} = JSON.parse(Deno.args[0]);
console.log(JSON.stringify(sumBy([a, b], (obj:any) => obj.x)));
