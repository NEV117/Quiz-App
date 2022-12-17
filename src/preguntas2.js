const preguntas = [
  {
    titulo: "¿Qué devuelve la siguiente función?",
    codigo: `function sayHi() {
        console.log(name);
        console.log(age);
        var name = "Lydia";
        let age = 21;
      }
      
      sayHi();`,
    opciones: [
      { textoRespuesta: "Lydia y undefined", isCorrect: false },
      { textoRespuesta: "Lydia y ReferenceError", isCorrect: false },
      { textoRespuesta: "ReferenceError y 21", isCorrect: false },
      { textoRespuesta: "undefined y ReferenceError", isCorrect: true },
    ],
  },
  {
    titulo: "¿Qué devuelve la siguiente función?",
    codigo: `for (var i = 0; i < 3; i++) {
            setTimeout(() => console.log(i), 1);
          }
          
          for (let i = 0; i < 3; i++) {
            setTimeout(() => console.log(i), 1);
          }`,
    opciones: [
      { textoRespuesta: "0 1 2 y 0 1 2", isCorrect: false },
      { textoRespuesta: "0 1 2 y 3 3 3", isCorrect: false },
      { textoRespuesta: "3 3 3 y 0 1 2", isCorrect: true },
    ],
  },
  {
    titulo: "¿Qué devuelve la siguiente función?",
    codigo: `var num = 8;
    var num = 10;
    
    console.log(num);`,
    opciones: [
      { textoRespuesta: "8", isCorrect: false },
      { textoRespuesta: "10", isCorrect: true },
      { textoRespuesta: "SyntaxError", isCorrect: false },
      { textoRespuesta: "ReferenceError", isCorrect: false },
    ],
  },
  {
    titulo: "¿Qué devuelve la siguiente función?",
    codigo: `const obj = { 1: "a", 2: "b", 3: "c" };
    const set = new Set([1, 2, 3, 4, 5]);
    
    obj.hasOwnProperty("1");
    obj.hasOwnProperty(1);
    set.has("1");
    set.has(1);`,
    opciones: [
      { textoRespuesta: "false true false true", isCorrect: false },
      { textoRespuesta: "false true true true", isCorrect: false },
      { textoRespuesta: "true true false true", isCorrect: true },
      { textoRespuesta: "true true true true", isCorrect: false },
    ],
  },
  {
    titulo: "¿Qué devuelve la siguiente función?",
    codigo: `const obj = { a: "one", b: "two", a: "three" };
    console.log(obj);`,
    opciones: [
      { textoRespuesta: `{ a: "one", b: "two" }`, isCorrect: false },
      { textoRespuesta: `{ b: "two", a: "three" }`, isCorrect: false },
      { textoRespuesta: `{ a: "three", b: "two" }`, isCorrect: true },
      { textoRespuesta: "SyntaxError", isCorrect: false },
    ],
  },  
  {
    titulo: `El contexto de ejecución de JS crea dos cosas: el objecto global y la palabra reservada "this".`,
    codigo: `A: true
    B: false
    C: it depends`,
    opciones: [
      { textoRespuesta: `A`, isCorrect: true },
      { textoRespuesta: `B`, isCorrect: false },
      { textoRespuesta: `C`, isCorrect: false },
      { textoRespuesta: "A y C", isCorrect: false },
    ],
  },  
  {
    titulo: `¿Qué devuelve la siguiente función?`,
    codigo: `for (let i = 1; i < 5; i++) {
      if (i === 3) continue;
      console.log(i);
    }`,
    opciones: [
      { textoRespuesta: `1 2`, isCorrect: false },
      { textoRespuesta: `1 2 3`, isCorrect: false },
      { textoRespuesta: `1 2 4`, isCorrect: true },
      { textoRespuesta: "1 3 4", isCorrect: false },
    ],
  },
  {
    titulo: "¿Qué devuelve la siguiente función?",
    codigo: `const shape = {
        radius: 10,
        diameter() {
          return this.radius * 2;
        },
        perimeter: () => 2 * Math.PI * this.radius
      };
      
      shape.diameter();
      shape.perimeter();`,
    opciones: [
      { textoRespuesta: "20 y 62.83185307179586", isCorrect: false },
      { textoRespuesta: "20 y NaN", isCorrect: true },
      { textoRespuesta: "20 y 63", isCorrect: false },
      { textoRespuesta: "NaN y 63", isCorrect: false },
    ],
  },
  {
    titulo: "¿Qué ocurre cuando hacemos esto?",
    codigo: `function bark() {
      console.log("Woof!");
    }
    
    bark.animal = "dog";`,
    opciones: [
      { textoRespuesta: " No pasa nada, es totalmente correcto.", isCorrect: true },
      { textoRespuesta: "SyntaxError.", isCorrect: false },
      { textoRespuesta: "undefined", isCorrect: false },
      { textoRespuesta: "ReferenceError", isCorrect: false },
    ],
  },
  {
    titulo: "¿Qué devuelve la siguiente función?",
    codigo: `let number = 0;
    console.log(number++);
    console.log(++number);
    console.log(number);`,
    opciones: [
      { textoRespuesta: " 1 1 2", isCorrect: false },
      { textoRespuesta: "1 2 2", isCorrect: false },
      { textoRespuesta: "0 2 2", isCorrect: true },
      { textoRespuesta: "0 1 2", isCorrect: false },
    ],
  },
  {
    titulo: "¿Qué devuelve la siguiente función?",
    codigo: `const obj = { a: "one", b: "two", a: "three" };
    console.log(obj);`,
    opciones: [
      { textoRespuesta: `{ a: "one", b: "two" }`, isCorrect: false },
      { textoRespuesta: `{ b: "two", a: "three" }`, isCorrect: false },
      { textoRespuesta: `{ a: "three", b: "two" }`, isCorrect: true },
      { textoRespuesta: "SyntaxError", isCorrect: false },
    ],
  },
  {
    titulo: "¿Qué devuelve la siguiente función?",
    codigo: `for (let i = 1; i < 5; i++) {
      if (i === 3) continue;
      console.log(i);
    }`,
    opciones: [
      { textoRespuesta: `1 2`, isCorrect: false },
      { textoRespuesta: `1 2 3`, isCorrect: false },
      { textoRespuesta: `1 2 4`, isCorrect: true },
      { textoRespuesta: "1 3 4", isCorrect: false },
    ],
  },
  {
    titulo: "¿Qué devuelve la siguiente función?",
    codigo: `function getAge(...args) {
      console.log(typeof args);
    }
    
    getAge(21);`,
    opciones: [
      { textoRespuesta: "number", isCorrect: false },
      { textoRespuesta: "array", isCorrect: false },
      { textoRespuesta: "object", isCorrect: true },
      { textoRespuesta: "NaN", isCorrect: false },
    ],
  },
  {
    titulo: "¿Cuál es el valor de sum?",
    codigo: `const sum = eval("10*10+5");`,
    opciones: [
      { textoRespuesta: "105", isCorrect: true },
      { textoRespuesta: `"105"`, isCorrect: false },
      { textoRespuesta: `TypeError`, isCorrect: false },
      { textoRespuesta: `"10*10+5"`, isCorrect: false },
    ],
  },
  {
    titulo: "¿Cuál NO es válida?",
    codigo: `const bird = {
        size: "small"
      };
      
      const mouse = {
        name: "Mickey",
        small: true
      };`,
    opciones: [
      { textoRespuesta: "mouse.bird.size", isCorrect: true },
      { textoRespuesta: "mouse[bird.size]", isCorrect: false },
      { textoRespuesta: `mouse[bird["size"]]`, isCorrect: false },
      { textoRespuesta: "Todas son correctas", isCorrect: false },
    ],
  },
];

export default preguntas;
