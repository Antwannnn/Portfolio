const copyClipboardBtn = document.getElementById('copyclipboard');

function scrollToDiv(url){
    window.location=url;
}

copyClipboardBtn.addEventListener('click', () => apply());

function apply(){
    handleCopy('Antwan#1649');
    changeColor(copyClipboardBtn, '#3abe8c', "Copié !");
}

/* 
    A noter que ici que je n'utilise pas le Clipboard API puisque elle n'est disponible que pour les sites en protocoles https et
    non pour les protocoles http. Je suis donc obligé d'utiliser la methode execCommand() qui est depreciée
*/

const handleCopy = (content) => {
    const textarea = document.createElement("textarea");
    textarea.textContent = content;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
};

function changeColor(btn, color, text){
    btn.style.backgroundColor = color;
    if(text == null)
      return btn.textContent;
    btn.textContent = text;

}
