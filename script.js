function Converter() {
  var valorElemento = document.getElementById("valor");

  var valor = valorElemento.value;

  var valorNumerico = parseFloat(valor);

  var valorEmDolar = valorNumerico / 5.24;

  var elementoValorConvertido = document.getElementById("valorConvertido");

  var valorConvertido = "O valor em Dolar é $ " + valorEmDolar;

  elementoValorConvertido.innerHTML = valorConvertido;
}
function ConverterEuro() {
  var valorElemento = document.getElementById("valor");

  var valor = valorElemento.value;

  var valorNumerico = parseFloat(valor);

  var valorEmEuro = valorNumerico / 6.26;

  var elementoValorConvertido = document.getElementById("valorConvertido");

  var valorConvertido = "O valor em Euro é €  " + valorEmEuro;

  elementoValorConvertido.innerHTML = valorConvertido;
}
function ConverterYene() {
  var valorElemento = document.getElementById("valor");

  var valor = valorElemento.value;

  var valorNumerico = parseFloat(valor);

  var valorEmYene = valorNumerico * 20.51;

  var elementoValorConvertido = document.getElementById("valorConvertido");

  var valorConvertido = "O valor em Yene é ¥ " + valorEmYene;

  elementoValorConvertido.innerHTML = valorConvertido;
}
function ConverterRublo() {
  var valorElemento = document.getElementById("valor");

  var valor = valorElemento.value;

  var valorNumerico = parseFloat(valor);

  var valorEmRublo = valorNumerico * 13.77;

  var elementoValorConvertido = document.getElementById("valorConvertido");

  var valorConvertido = "O valor em Rublo é ₽ " + valorEmRublo;

  elementoValorConvertido.innerHTML = valorConvertido;
}
function ConverterBitcoin() {
  var valorElemento = document.getElementById("valor");

  var valor = valorElemento.value;

  var valorNumerico = parseFloat(valor);

  var valorEmBitcoin = valorNumerico * 0.00000424;

  var elementoValorConvertido = document.getElementById("valorConvertido");

  var valorConvertido = "O valor em Bitcoin é BTC  " + valorEmBitcoin;

  elementoValorConvertido.innerHTML = valorConvertido;
}
function ConverterEthereum() {
  var valorElemento = document.getElementById("valor");

  var valor = valorElemento.value;

  var valorNumerico = parseFloat(valor);

  var valorEmEthereum = valorNumerico * 0.00000424;

  var elementoValorConvertido = document.getElementById("valorConvertido");

  var valorConvertido = "O valor em Ethereum é ETH " + valorEmEthereum;

  elementoValorConvertido.innerHTML = valorConvertido;
}