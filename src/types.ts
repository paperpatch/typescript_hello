// let sales: number = 123_456_789;
// let course: string = 'TypeScript';
// let is_published: boolean = true;

let sales = 123_456_789; // number
let course = 'TypeScript'; // string
let is_published = true; // boolean
let level; // any

level = 1;
level = 'a';

function render(document: any) { // have to define the document type. But it gets repetitive.
  console.log(document);
}

// function render(document) { // Can disable through Type Checking in tsconfig -> "noImplicitAny": false, but then you lose TypeScript's advantage the purpose.
//   console.log(document);
// }