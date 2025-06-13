

function uppg9 ([]){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument

    const numbers = [62,35,14,29,55]
    
    for (let number of numbers){
        if (number % 2 == 0 ){
            console.log(`${number} är jämt`);
        } else {
            console.log(`${number} är udda`);
        }
    }
}

uppg9([]);
module.exports = { uppg9 };