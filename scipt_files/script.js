function newElement() {

    var inputValue = document.querySelector("#task").value;
   
    if (inputValue === ''){
        alert("Bu alanı boş bırakamazsınız!")
    }
    else {
        var li = document.createElement("li");
        li.innerHTML=inputValue+'<span class="close">&times;</span>';
        document.querySelector("#list").appendChild(li);
        // li.innerHTML=inputvalue + 
    }
    document.querySelector("#task").value = "";
}


// document.querySelector("liveToastBtn").addEventListener("click",newElement);

