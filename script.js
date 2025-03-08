const form = document.getElementById("form");

console.log(consent);
//Getting the various error spans
const fNameError = document.getElementById("fName-error");
const lNameError = document.getElementById("lName-error");
const emailError = document.getElementById("email-error");
const queryError = document.getElementById("query-error");
const messageError = document.getElementById("message-error");
const consentError = document.getElementById("consent-error");

//Adding an event listener to listen for a submit event
form.addEventListener("submit", (e) => {
    e.preventDefault(); //To prevent default behaviour

    const fName = document.getElementById("fName").value;
    const lName = document.getElementById("lName").value;
    const email = document.getElementById("emailAddress").value;
    const message = document.getElementById("message").value;

    let valid = true;

    //Validating the firstname field
    //Firstname validation
    if(fName == ""){
        valid = false
        fNameError.style.display = "block";
        fNameError.textContent = "This field is required";
    }

    //Lastname validation
    if(lName == ""){
        valid = false
        lNameError.style.display = "block";
        lNameError.textContent = "This field is required";
    }

    //Email validation
    if(email == ""){
        emailError.style.display = "block";
        emailError.textContent = "This field is required";
    }

    //Message validation
    if(message == ""){
        valid = false
        messageError.style.display = "block";
        messageError.textContent = "This field is required";
    }

    if(valid){
        const sucMessage = document.querySelector(".success-message");
        sucMessage.style.display = "block";
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    }

    

})
