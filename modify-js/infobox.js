const infobox = document.createElement("BUTTON");
infobox.innerHTML = "Merci d'utiliser EntPp<br>-------------------------------------------------------<br>Tip de la semaine (clique pour l'historique)<br><em>\"Commencez à coder en apprenant le JavaScript !\"</em>";
infobox.style = "cursor: pointer; background-color: white; color: black; display: block; padding: 1rem 2rem 1rem 1rem; position: absolute; box-sizing: inherit; top: 0; left: 0; border: none; text-align: left;";
document.body.appendChild(infobox);
infobox.onclick = function(){
    window.open('https://www.google.com');
}