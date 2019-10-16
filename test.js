//@ts-check

function setup() {
    let navnListe = [];
    let inpNavn = document.getElementById("navn");
    let inpPassord = document.getElementById("passord");
    let btnLagre = document.getElementById("lagre");

    btnLagre.addEventListener("click", lagreData);

    function lagreData() {
        let navn = inpNavn.value;
        let passord = inpPassord.value;
        let brukerData = { navn, passord };
        let bareNavn = navnListe.map(e => e.navn);
        if (bareNavn.includes(navn)) {
            let target = navnListe.filter(e => e.navn === navn)[0];
            if (target.passord === passord) {

            } else {
                // feil passord
            alert("Feil passord, eller allerede eksisterende navn")
            }

        } else {
            navnListe.push(brukerData);
            localStorage.setItem("bruker", JSON.stringify(navnListe));
        }
    }

}