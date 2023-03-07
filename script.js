function primeiraFuncao(parametro1, parametro2) {
  console.log(parametro1);
  console.log(parametro2);
}

// primeiraFuncao({ color: "black", price: 1500 }, [
//   "fiat",
//   "mercedez",
//   "ferrari",
// ]);

function media(nota1, nota2 = 5) {
  const resultado = (nota1 + nota2) / 2;
  // 10 + undefined

  return resultado;
}

const notaDoVitor = media(10);

// console.log(notaDoVitor);

const media2 = (nota1, nota2 = 7) => {
  return (nota1 + nota2) / 2;
};

const media3 = (nota1, nota2 = 7) => (nota1 + nota2) / 2;

const notaDoJoaquim = media2(10);

// console.log(notaDoJoaquim);
