const first = (n) => n[0]
const last = (n) => n[n.length-1]
const kiss = (n) => [last(n) + first(n)]

console.log(first("hey"))
console.log(last("hey"))
console.log(kiss("hey"))