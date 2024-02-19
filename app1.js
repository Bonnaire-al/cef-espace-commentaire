let text1 = document.getElementById("first-name");
let text2 = document.getElementById("last-name");
let text3 = document.getElementById("message");



let errorDiv = document.getElementById("error-message" );

let afficherErreurBtn = document.querySelector("button");

function afficherErreur() {
    errorDiv.style.display = "block"; 
}



function  creationtexte() {
    let textv1 = text1.value;
    let textv2 = text2.value;
    let textv3 = text3.value;

    let content0 = document.createElement("div");
    let content1 = document.createElement("div");
    let content2 = document.createElement("div");
    let content3 = document.createElement("h1");
    let content4 = document.createElement("p");
    
    content3.textContent = textv1 + "  " + textv2;
    content4.textContent = textv3;
    
    content0.appendChild(content1);
    content1.appendChild(content3);
    content1.appendChild(content2);
    content2.appendChild(content4);

    let listcom = document.getElementById("comment-list");

    listcom.appendChild(content0);
   
    content0.classList.add("flex", "space-x-4", "text-sm", "text-gray-500");
    content1.classList.add("flex-1", "py-10");
    content2.classList.add("prose", "prose-sm", "mt-4", "max-w-none", "text-gray-500");
    content3.classList.add("font-medium", "text-gray-900");
    content0.style.borderTop = "1px solid #f0f0f0";

}

function validerText() {
    if (text1.value === "" || text2.value === "" || text3.value === "") {
        afficherErreur(); 
        
    } else {
       errorDiv.style.display = "none"; 
        creationtexte();
    
    }
}


afficherErreurBtn.addEventListener("click", validerText);

