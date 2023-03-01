function colocarNaTela(dados){
console.log(dados)

document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
document.querySelector(".temp").innerHTML = "Temperatura: " + Math.floor(dados.main.temp) + "°C"
document.querySelector(".tempMin").innerHTML = "Min: " + Math.floor(dados.main.temp_min) + "°C"
document.querySelector(".tempMax").innerHTML = "Max: " + Math.floor(dados.main.temp_max) + "°C"
document.querySelector(".descricao").innerHTML = dados.weather[0].description
document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"

}

let chave = "cebcd482eda57fa9a6714c1c2ba91885"

async function buscarCidade(Cidade){
let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
 Cidade + 
 "&appid=" +
  chave + 
  "&lang=pt_br" + "&units=metric").then(resposta => resposta.json())



colocarNaTela(dados)

}

function cliqueBotao(){
    let Cidade = document.querySelector(".input-Cidade").value

    buscarCidade(Cidade)

}