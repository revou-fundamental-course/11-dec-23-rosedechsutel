function setName(pname) {
    document.getElementById('nama-orang').innerHTML = pname;
}

let namaorang = prompt("Halo, siapa nama anda?", "")
setName(namaorang);

function validateForm() {
    const name = document.forms["form-container"]["name"].value;
    const date = document.forms["form-container"]["date"].value;
    const gender = document.forms["form-container"]["gender"].value;
    const messages = document.forms["form-container"]["message"].value;

    if (name == "" || date == "" || gender == "" || message == "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }
        
    setSenderUI(name, date, gender, messages);
    return false;
}

function setSenderUI(pname, pdate, pgender, pmessages) {
    document.getElementById("sender-name").innerHTML = pname;
    document.getElementById("sender-date").innerHTML = pdate;
    document.getElementById("sender-gender").innerHTML = pgender;
    document.getElementById("sender-message").innerHTML = pmessage;
}