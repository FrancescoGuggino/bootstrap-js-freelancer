/*Quando l’utente fa click sul bottone “send” del form, il sito deve calcolare l’ammontare del preventivo per le ore di lavoro richieste.
Il prezzo orario per una commissione varia in questo modo:
- se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.5€ l’ora
- se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.3€ l’ora
- se la commissione riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.6€
L’utente potrebbe decidere di utilizzare un codice promozionale tra i seguenti:
- YHDNU32
- JANJC63
- PWKCN25
- SJDPO96
- POCIE24
Se l’utente inserisce un codice promozionale valido, ha diritto ad uno sconto del 25% sul prezzo finale.
 Se il codice inserito non è valido, il sito deve informare l’utente che il codice non è valido e il prezzo finale viene calcolato senza applicare sconti.
Il risultato del calcolo del prezzo finale deve essere visualizzato in “forma umana” (con 2 decimali e il simbolo dell’euro) in un apposito tag HTML appena sotto il bottone send.
*/

let discountCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"]





//calcolo offerta e sconti
function offer (event){
    event.preventDefault();

    console.log(event);
    

    //prendo dati iseriti dall'utente
    let hours = parseInt(document.getElementById("hours").value);
    let optionsOffer = parseInt(document.getElementById("work").value);
    let discountCode = document.getElementById("discount").value;


let finalPrice = 0

    //opzioni lavoro
    switch(optionsOffer){
        case 1:
            finalPrice = 20.5 * hours;
            break;
        case 2:
            finalPrice = 15.3 * hours;
            break;
        case 3:
            finalPrice = 33.6 * hours;
    }

  //sconto
    let DiscountCodeCheck = false;
    for(let i = 0; i < discountCodes.length; i++){
        if(discountCodes[i] == discountCode){
            DiscountCodeCheck = true;

            break;
        }
    }

    if (!discountCode) {
        alert("Il codice inserito non è valido!");

    }

    if(DiscountCodePresent){
        finalPrice = 0.75 * finalPrice;
    }

    finalPrice = finalPrice.toFixed(2);

    document.getElementById("price").innerHTML = "Il prezzo stimato è di: " + finalPrice;

}