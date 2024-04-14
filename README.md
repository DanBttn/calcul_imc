# Coder un calculateur d'IMC

Le but de ce projet est de coder un **calculateur d'IMC** à partir des valeurs rentrées par un utilisateur dans les **deux inputs**.

<br>

### A. Coder une interface basique
> Codez d'abord une interface très simple, contenant les éléments importants : boutons, inputs, liens, etc... <br>
> Rajoutez un peu de style si besoin est.
> <br>
> Puis codez les fonctionnalités JavaScript.
>
<br>

### B. Fonctionnalités JavaScript à coder pour ce projet

1. Gérer les inputs, retrouvez leur valeur dans votre script quand on clique sur le bouton.
2. Faites une validation basique, empêchez le calcul si l'utilisateur laisse un ou deux inputs vides. <br>
   Montrez également un message pour l'informer de l'erreur (ex : "Veuillez remplir les inputs").
1. Calculer l'IMC avec les valeurs rentrées.
2. Calculer le rang de l'IMC par rapport à "IMCData"
3. Remplir l'interface en fonction des résultats

### C. Ajoutez du style à l'interface afin de terminer le projet.
Voici la maquette attendu (Maquette.png)

![Maquette](Maquette.png)

# Aide de code JS
## Selector
```javascript
document.querySelector("input[name='weight']")
```

## Event
```javascript
document.querySelector("input[name='weight']").addEventListener("change", function(event) {
    console.log(event.target.value)
})
```

## Math
IMC = poids en kg / taille² en m
```javascript
  const BMI = (weight / Math.pow(height / 100, 2)).toFixed(1);
```
