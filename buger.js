function redirectToOtherPage() {
    window.location.href = 'finalpage.html';
}
let counter = 1;
function nextPage() {
    if (counter<7){
    const oldDiv = document.getElementById(`o${counter}`);
    counter+=1;
    const myDiv = document.getElementById(`o${counter}`);
    oldDiv.style.display = "none"
    myDiv.style.display = "block"
    }
}
function prevPage() {
    if (counter>0){
    const oldDiv = document.getElementById(`o${counter}`);
    counter-=1;
    const myDiv = document.getElementById(`o${counter}`);
    myDiv.style.display = "block";
    oldDiv.style.display = "none";
    }
}
function display(id) {
    document.getElementById(id).style.display = "block";
}
function doNotDisplay(id){
    document.getElementById(id).style.display = "none";
}

const wbottomBread = document.getElementById("wbr");
const bbottomBread = document.getElementById("bbr");

wbottomBread.addEventListener("click", function() {
    let tomatoes = document.getElementsByClassName("bo");
        tomatoes[0].style.display = "none";
        tomatoes[1].style.display = "block";
        tomatoes[2].style.display = "none";
        tomatoes[3].style.display = "block";
});
bbottomBread.addEventListener("click", function() {
    let tomatoes = document.getElementsByClassName("bo");
        tomatoes[0].style.display = "block";
        tomatoes[1].style.display = "none";
        tomatoes[2].style.display = "block";
        tomatoes[3].style.display = "none";
});
const mayonnaise = document.getElementById("mayonnaise");
const mustard = document.getElementById("mustard");
const spicy = document.getElementById("spicy");
mayonnaise.addEventListener("change", function() {
    display("Mayo");
    doNotDisplay("Mustard");
    doNotDisplay("Spicy");
});
mustard.addEventListener("change", function() {
    display("Mustard");
    doNotDisplay("Mayo");
    doNotDisplay("Spicy");
});
spicy.addEventListener("change", function() {
    display("Spicy");
    doNotDisplay("Mustard");
    doNotDisplay("Mayo");
});

const beef = document.getElementById("Beef");
const chicken = document.getElementById("chicken");
beef.addEventListener("change", function() {
    display("Grilled");
    doNotDisplay("Chicken"); 
});
chicken.addEventListener("change", function() {
    display("Chicken");
    doNotDisplay("Grilled"); 
});

const yesCheese = document.getElementById("Yes");
const noCheese = document.getElementById("Nope");

yesCheese.addEventListener("change", function() {
    display("cheese");
});
noCheese.addEventListener("change", function() {
    doNotDisplay("cheese");
});

const lettuce = document.getElementById("lettuce");
const tomato = document.getElementById("tomato");
const cucumber = document.getElementById("cucumber");
lettuce.addEventListener("change", function() {
    if (lettuce.checked){
        display("Lettuce");
    } else {
        doNotDisplay("Lettuce");
    }
    });
tomato.addEventListener("change", function() {
    if (tomato.checked){
        document.getElementById("maticha").style.display = "flex";

        let tomatoes = document.getElementsByClassName("tomatoes");
        tomatoes[0].style.display = "block";
        tomatoes[1].style.display = "block";
        tomatoes[2].style.display = "block";
    } else {
        document.getElementById("maticha").style.display = "none";

        let tomatoes = document.getElementsByClassName("tomatoes");
        tomatoes[0].style.display = "none";
        tomatoes[1].style.display = "none";
        tomatoes[2].style.display = "none";
    }
    });
cucumber.addEventListener("change", function() {
    if (cucumber.checked){
        document.getElementById("Lkhyari").style.display = "flex";

        let cucumbers= document.getElementsByClassName("cucumbers");
        cucumbers[0].style.display = "block";
        cucumbers[1].style.display = "block";
        cucumbers[3].style.display = "block";
        cucumbers[2].style.display = "block";
    } else {
        document.getElementById("Lkhyari").style.display = "none";
        let cucumbers= document.getElementsByClassName("cucumbers");
        cucumbers[0].style.display = "none";
        cucumbers[1].style.display = "none";
        cucumbers[3].style.display = "none";
        cucumbers[2].style.display = "none";
    }
});