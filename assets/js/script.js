// Déclaration de la variable listeDeTaches
let listeDeTaches = [];

// Fonction afficherTache
function afficherTache(){
    const LIST = document.querySelector("#taskList"); //Constante pour qu'elle ne change pas 
    LIST.innerHTML="";

    listeDeTaches.forEach((tache,index) => {
        let li = document.createElement('li');
        li.textContent = tache;
        li.style.fontFamily="Arial";
        li.style.fontSize="15px";
        li.style.listStyle="none";
        li.style.textAlign='center';
        li.style.textTransform="capitalize";

        const SUPPBUTTON = document.createElement('button');
        SUPPBUTTON.innerHTML = `<i class="fa-solid fa-trash" style="color: #D9A299;font-size:20px"></i>`;
        SUPPBUTTON.style.backgroundColor="none";
        SUPPBUTTON.style.border="none";
        SUPPBUTTON.addEventListener('click',() =>supprimerTache(index));


        li.appendChild(SUPPBUTTON);
        LIST.appendChild(li);
    })
}

// Fonction ajouterTache
function ajouterTache() {
    const INPUT = document.querySelector("#taskInput");
    let newTache = INPUT.value;

    if (newTache !== "") {
        listeDeTaches.push(newTache);
        INPUT.value = "";
        afficherTache();
    }  
}

// Fonction supprimerTache
function supprimerTache(index) {
    listeDeTaches.splice(index,1);
    afficherTache();
}

// Intégrer les fonctions
document.querySelector("#addTaskButton").addEventListener('click',ajouterTache);