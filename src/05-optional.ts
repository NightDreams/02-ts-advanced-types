const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    isNew: isNew ?? true,
    stock: stock ?? 10,
  };
};

// dont use || with optional values
// false values
// 0 === false
// '' === false
// false === false

const P1 = createProduct(1, true, 12);
console.log('P1:', P1);

const P2 = createProduct(1);
console.log('P2:', P2);

const P3 = createProduct(1, false, 0);
console.log('P3:', P3);

const P4 = createProduct(1, true, 100);
console.log('P4:', P4);

const P5 = createProduct(5, false);
console.log('P5:', P5);
