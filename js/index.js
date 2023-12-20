function setName(pname) {
    document.getElementById('nama-orang').innerHTML = pname;
}

let namaorang = prompt("Halo, You Can Type your name below", "")
setName(namaorang);

document.getElementById("form-container").addEventListener("send", function(event){
    event.preventDefault();
    var form = this;
    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var gender = document.getElementById("gender").value;
    var message = document.getElementById("message").value;

    if(name === "" || name === "") {
        alert("Both fields are required.");
        return false;
    }

    var newDiv = document.createElement("div");
    newDiv.innerHTML = "name: " + name + ", date: " + date, "gender: " + gender, "message: " + message ;
    document.querySelector(".form-message").appendChild(newDiv);

});

var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("slide-row");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        slides[slideIndex-1].style.display = "table-row";  
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }