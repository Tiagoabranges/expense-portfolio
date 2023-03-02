const token = ;
const moeda = 'USD_BRL,EUR_USD';

fetch(`https://api.invertexto.com/v1/currency/${moeda}?${token}`)
	.then((response) => response.json())
	.then((data) => console.log(data));
