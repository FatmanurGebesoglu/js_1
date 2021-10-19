console.log("merhaba")
let dolarDun= 9.20
let dolarBugun=9.30
{
    let dolarDun=9.10
}
console.log(dolarDun)

const euroDun = 11.2
//euroDun=11
//const da atanan degerin üzerine deger atayamazsın
console.log(euroDun)

//array
// camelCasing kullanılır
let konutKredileri = ["konut kredisi", "emlak konut kredisi", "kamu konut kredisi","özel konut kredisi"]
console.log(konutKredileri)

console.log("<ul>")
for(let i=0; i<konutKredileri.length; i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")
