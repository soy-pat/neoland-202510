var a = 1,
  b = 2;

console.log(a + b);

var g = "hello";

var i = true;

var h = b / g;

console.log(a, b, g, h);

var cart = [];
cart[0] = { title: "Chocolate Milka", price: 2.85, quantity: 4 };
cart[1] = { title: "Redbull", price: 1.6, quantity: 7 };
cart[2] = { title: "Champiñones", price: 1.75, quantity: 2.8 };
cart[3] = { title: "Boniato", price: 2, quantity: 3.1 };

var generateTicket = function (items) {
  var text = "SuperCoolMarket\n";
  var total = 0;
  var subtotal = 0;
  text += "------------------------------------\n";

  for (var i = 0; i < items.length; i++) {
    var item = items[i];

    subtotal = item.quantity * item.price;

    text +=
      item.title +
      "\t" +
      item.quantity +
      " * " +
      item.price +
      "\t = " +
      subtotal +
      "\n";

    total += subtotal;
  }

  text += "------------------------------------\n";

  text += "Total \t\t\t\t" + total + "\n\n";

  text += "Date \t\t\t\t" + new Date().toLocaleDateString();

  return text;
};

var ticket = generateTicket(cart);

console.log(ticket);

//COSAS DE MANU
var cart = [];

cart[0] = { title: "Chocolate Milka", price: 2.85, quantity: 4 };
cart[1] = { title: "Redbull", price: 1.6, quantity: 7 };
cart[2] = { title: "Champiñones", price: 1.75, quantity: 2.8 };
cart[3] = { title: "Boniato", price: 2, quantity: 3.1 };

var generateTicket = function (items) {
  var text = "SuperCoolMarket\n";
  text += "----------------------------------\n";

  var total = 0;

  for (var i = 0; i < items.length; i++) {
    var item = items[i];

    var subtotal = item.quantity * item.price;

    text +=
      item.title +
      "\t" +
      item.quantity +
      " * " +
      item.price +
      "\t = " +
      subtotal +
      "\n";

    total += subtotal;
  }

  text += "----------------------------------\n";

  text += "Total \t\t\t " + total + "\n\n";

  text += "Date \t\t\t " + new Date().toLocaleDateString();

  return text;
};

var ticket = generateTicket(cart);

console.log(ticket);
/*
SuperCoolMarket
----------------------------------
Chocolate Milka   4 * 2.85   = ...
Redbull           7 * 1.6    = ...
Champiñones       2.8 * 1.75 = ...
Boniato           3.1 * 2    = ...
----------------------------------
Total                          ...

Date                    ../../....
*/

console.log("The End");

var shelf = {};

shelf["0"] = "Peter Pan Book";
shelf["1"] = "Little Red Riding Hood Book";
shelf["2"] = "The Little Prince Book";
shelf["3"] = "The Lord of The Rings Book";
shelf["4"] = "Harry Potter Book";
shelf["5"] = "The World of Sophia Book";
//shelf.6 = 'The Shinning Book';
//shelf['6'] = 'The Shinning Book';
shelf[6] = "The Shinning Book";

//console.log(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, shelf);

/*
console.log(shelf[0]);
console.log(shelf[1]);
console.log(shelf[2]);
console.log(shelf[3]);
console.log(shelf[4]);
console.log(shelf[5]);
console.log(shelf[6]);
*/

/*
var index = 0;

console.log(shelf[index]);
index++
console.log(shelf[index]);
index++
console.log(shelf[index]);
index++
console.log(shelf[index]);
index++
console.log(shelf[index]);
index++
console.log(shelf[index]);
index++
console.log(shelf[index]);
*/

/*
var index = 0;

while (index < 7) {
    console.log(shelf[index]);
    index++;
}
*/

/*
for (var index = 0; index < 7; index++) {
    console.log(shelf[index]);
}
*/

// number -> 0, 1, 2.2, -3.5, ...
// boolean -> true, false
// string -> 'hola mundo', "hola mundo", '{"name":"Pepito"}', ...
// undefined -> value is not defined, it does not exist 🏹
// null -> void value ⛳︎
// object -> { name: 'Pepito', surname: 'Grillo', age: 30 }, ...
// array -> [0, 1, 2], [true, false], [0, 1, true, 'hola mundo'], ...
// date -> 2025-11-3 20:28
// function -> function(...) { ... }

var a;

a = 1;

var b = 2;

var c = a + b;

var d = true;

var e = !d;

var f = a + d;

var g = "hello";

var h = b + e + g;

var i = b + g + e;

var j;

var k = i + j;

var l = a / 0;

var m = b / d;

var n = c / g;

var o = c * g;

var p = g + g + g;

var q = h - g;

var r = null + f;

var s = f + "" + f;

var t = a * null;

var u = undefined * null;

var v = undefined + c;

var w = m * "" * g;

var x = {};

x["name"] = "Peter";

var y = x;

y["name"] = "Wendy";

x["surname"] = "Darling";

var z = { name: "James" };

y["uncle"] = z;

z["surname"] = "Bond";

z["niece"] = x;

x["uncle"]["surname"] = "Hook";

z["niece"]["age"] = 13;

y["age"] = y["age"] + 1;

x["age"]++;

x["age"] = x["age"] - 4;

y["age"] -= 3;

x["age"] += 1;

//x['uncle']['age'] = 45;
x.uncle.age = 45;

//COSAS DE STEPHANNY
/*
- Tenemos un array con nombres de personas 
- Tenemos que imprimir el nombre de cada persona en la consola (uno debajo de otro)
*/

var alumnos = [];

alumnos[0] = { nombre: "Juan", edad: 34 };
alumnos[1] = { nombre: "Laura", edad: 30 };
alumnos[2] = { nombre: "Albert", edad: 36 };
alumnos[3] = { nombre: "Jodlin", edad: 45 };
alumnos[4] = { nombre: "Paula", edad: 32 };
alumnos[5] = { nombre: "Manuel", edad: 15 };
alumnos[6] = { nombre: "Jorge", edad: 32 };
alumnos[7] = { nombre: "Sergio", edad: 30 };
alumnos[8] = { nombre: "Rodolfo", edad: 36 };
alumnos[9] = { nombre: "Stephanny", edad: 27 };
alumnos[10] = { nombre: "Agustin", edad: 23 };
alumnos[11] = { nombre: "Patricia", edad: 23 };
alumnos[12] = { nombre: "Ibra", edad: 18 };

var suma = 0;

for (var i = alumnos.length - 1; i >= 0; i--) {
  console.log(
    "Nombre: " +
      alumnos[i].nombre.toLowerCase() +
      " Edad: " +
      "(" +
      alumnos[i].edad +
      ")"
  );
  suma += alumnos[i].edad;
}

console.log(suma);

console.log("The end");
