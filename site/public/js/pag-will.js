/* Carrossel */
const controls = document.querySelectorAll(".control");

let itemAtual = 0;

const items = document.querySelectorAll(".item");

const maxItems = items.length;

controls.forEach(control =>{
    control.addEventListener("click", () =>{
        const isleft = control.classList.contains("arrow-left")
        
        if(isleft){
            itemAtual -= 1;
        }else{
            itemAtual += 1
        }

        if(itemAtual >= maxItems){
            itemAtual = 0;
        }

        if(itemAtual < 0){
            itemAtual = maxItems - 1;
        }

        items.forEach((item) => item.classList.remove("item-atual"));

        items[itemAtual].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest"
        });
        items[itemAtual].classList.add("item-atual");
    });
});