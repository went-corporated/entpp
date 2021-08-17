const infobox = document.createElement("BUTTON");
infobox.innerHTML = "<b>Merci d'utiliser EntPp</b><br>-------------------------------------------------------<br>Tip de la semaine (clique pour l'historique)<br><em>\"Commencez à coder en apprenant le JavaScript !\"</em>";
infobox.style = "z-index: 100000000000000000000; cursor: pointer; background-color: white; color: black; display: block; padding: 1rem 2rem 1rem 1rem; position: absolute; box-sizing: inherit; top: 50px; left: 50px; border: 5px solid black; text-align: left; box-shadow: 0 0 50px 0 rgba(100, 100, 100, 1);";
document.body.appendChild(infobox);
infobox.onclick = function(){
    alert(""
    +
    "[1 - 12 août] Commencez à coder en apprenant le JavaScript !\n"
    // +
    // "[1 - 12 août] Commencez à coder en apprenant le JavaScript !\n"
    // +
    // "[1 - 12 août] Commencez à coder en apprenant le JavaScript !\n"
    // +
    // "[1 - 12 août] Commencez à coder en apprenant le JavaScript !\n"
    // +
    // "[1 - 12 août] Commencez à coder en apprenant le JavaScript !\n"
    // +
    // "[1 - 12 août] Commencez à coder en apprenant le JavaScript !\n"
    );
}