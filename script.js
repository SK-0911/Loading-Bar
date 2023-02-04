var counter = document.querySelector(".counter")

const bar = document.querySelector(".loading-front")

const loadingText = document.querySelector(".loading-txt");
loadingText.innerText = "Loading";
document.querySelector(".container").insertBefore(loadingText, counter);

let idx = 0;

let dots = 0;

updateNum()

function updateNum(){
    counter.innerText = idx + "%";
    bar.style.width = idx + "%";
    if(idx===100){
        counter.classList.add("green-text");
        loadingText.innerText = "Loading";
    }
    else {
        loadingText.innerText = "Loading" + ".".repeat(dots % 4);
        dots++;
    }
    idx++;
    if(idx < 101){
        setTimeout(updateNum, 40)
    }
}


