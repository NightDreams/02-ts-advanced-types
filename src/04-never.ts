const withoutEnd = () => {
  while (true) {
    console.log('nunca pares de aprender');
  }
};

const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  // input === string.if
  if (typeof input === 'string') {
    return 'esto es un string';
  } else if (Array.isArray(input)) {
    return 'esto es un array';
  }
  return fail('not match');
};

console.log(example('Hola'));
console.log(example([1, 1, 1, 1]));
console.log(example(1212)); // detiene
console.log(example('Hola despues del fail'));
console.log(example('Hola despues del fail'));
console.log(example('Hola despues del fail'));
