
const input = document.querySelector("#input");
 // primeiro selecionar os itens que preciso, o input aqui onde vai digitar o texto

const counter = document.querySelector(".counter"); 
// aqui o contador pra fazer a mudança de texto dele

const toogleButton = document.querySelector("#toogle"); 
// o toogle que é o butão que faz a mudança que alterna qual info esta sendo exibida

let mode = "characters"; 
// criar a variavel que vai definir o que esta sendo exibido na tela, caracteres ou palavras.


toogleButton.addEventListener("click", () => { //alternar entre um modo e outro
    if ( mode === "characters"){ //se for modo de caracteres, vai mudar pra words, para mudar!
        mode = "words";
        toogleButton.textContent = "Contar caracteres"; //aqui vai pra palavra mas tem o botao de voltar para os caracteres, else embaixo

    } else { //agora vamos voltar pros caracteres quando clicar novamente 
        mode = "characters";
        toogleButton.textContent = "Contar palavras";
    }

    input.dispatchEvent(new Event("input")); // sempre que clicar no botao, dispara um evento nesse input para fazer a alteração de textos.
});


input.addEventListener("input", () => { //quando houver o evento de input, quando o usuario digitar algo dentro dele...

    let count = 0; // essa variavel vai detectar qual o modo que ta sendo utilizado...

    if (mode === "characters"){
        count = input.value.length; //aqui conta a quantidade de digitos do input, pegar o valor e consultar a prop lentgh,
                                    //e isso vai dar a quantidade de caracteres
                                    //pegar o valor e consultar propriedade .length, vai te dar a quantidade de carateres
        counter.textContent = `${count} caractere(s)`; 
        // pegar o contador, acessar a propriedade textContent e mudar o valor para "count que é o numero + 'caracteres'"
    } else {
        
     // como vamos contar palavras? criar variavel e vai pegar o texto dentro do input, dar um trim() parar cortar espaços laterais,
     // e vamos dividir a string num array baseado nos espaços que ela tem, usando uma hegex split(/\s+/)
        const words = input.value.trim().split(/\s+/); 

        count = input.value.trim() == "" ? 0 : words.length; 
        //se input.value for igual string vazia, 
        //entao o contador deve ser zero, se nao words.length.

        counter.textContent = `${count} palavras` ;
    }
});