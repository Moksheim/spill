//@ts-check

function setup() {
    let inpBrukernavn = document.getElementById("bruker");
    let inpNavn = document.getElementById("navn");
    let inpEpost = document.getElementById("epost");
    let inpMobil = document.getElementById("mobil");
    let inpPassord = document.getElementById("passord");
    let btnLagre = document.getElementById("lagre");

    btnLagre.addEventListener("click", lagreData);

    function lagreData() {
        let brukernavn = inpBrukernavn.value;
        let navn = inpNavn.value;
        let epost = inpEpost.value;
        let mobil = inpMobil.value;
        let passord = inpPassord.value;
        let brukerData = { brukernavn, navn, epost, mobil, passord };
        localStorage.setItem("brukernavn", JSON.stringify(brukerData));

    }
}