let button1 = document.querySelector(".button1");
let output = document.querySelector(".output");
let quotes = [
  " I’d rather let a thousand guilty men go free than chase after them. -Chief Wiggum",
  "'When a woman says nothing’s wrong, that means everything’s wrong. And when a woman says everything’s wrong, that means everything’s wrong. And when a woman says something’s not funny, you’d better not laugh your ass off. -Homer Simpson'",
  "' Ironic, isn’t it, Smithers? This anonymous clan of slack-jawed troglodytes has cost me the election. And yet, if I were to have them killed, I would be the one to go to jail. That’s democracy for you. -Mr. Burns'",
  "' How can I prove we’re live? Penis! -Kent Brockman'",
  "'Shut up, brain, or I’ll stab you with a Q-tip! -Homer Simpson",
];

button1.addEventListener("click", function () {
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  output.innerHTML = randomQuote;
});

//factorial de un numero

document.querySelector(".button2").addEventListener("click", function () {
  var numero = parseInt(prompt("Select Number"));
  function factorial(numero) {
    var total = 1;
    for (i = 1; i <= numero; i++) {
      total = total * i;
    }
    return total;
  }
  alert(factorial(numero));
});

