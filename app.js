const BMIData = [
    {name: "Maigreur", color: "midnightblue", range: [0, 18.5]},
    {name: "Bonne santé", color: "green", range: [18.5, 25]},
    {name: "Surpoids", color: "lightcoral", range: [25, 30]},
    {name: "Obésité modérée", color: "orange", range: [30, 35]},
    {name: "Obésité sévère", color: "crimson", range: [35, 40]},
    {name: "Obésité morbide", color: "purple", range: 40},
];

function CalculerImc() {
    // const tu ne pourra pas modifier le contenue et let tu peux modifier le contenue
    const taille = document.getElementById("taille");
    const poids = document.getElementById("poids");
    const poidsCategorie = document.getElementById("poidsCatégorie");

    //== veut dire null dinc de maniere bref et === ne veut pas forcement dire null mais vérifie de maniere stricte
    if (taille.value === "" || poids.value === "") {
        alert("Les champs doivent être remplis");
    } else if (poids.value === "0" || taille.value === "0") {
        alert("le poids ou la taille ne peuvent pas etre a 0")
    } else {
        const BMI = (poids.value / Math.pow(taille.value / 100, 2)).toFixed(1);


        const imcFinal = document.getElementById("resultatImc");
        imcFinal.innerText = BMI.valueOf();


        for (let i = 0; i < BMIData.length; i++) {
            const range =
                BMIData[i].range;
            if (typeof (range) === "object") {
                if (BMI >= range[0] && BMI < range[1]) {
                    poidsCategorie.innerText = "Vous etes en  " + BMIData[i].name;
                    break;
                }
            } else if (typeof (range === "number"))

            {
                if (BMI >= range) {
                    poidsCategorie.innerText = BMIData[i].name
                }

            }



        }
        }


}


// IMC = poids en kg / taille² en m
