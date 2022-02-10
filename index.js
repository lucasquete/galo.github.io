window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 4000);
};
  
document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container1").classList.toggle("change");
});

document.querySelector(".menu").addEventListener("click", () => {
  document.querySelector(".container1").classList.toggle("change");
});
  
document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "smooth";
  }, 1000);
});


function scrollWhatsappIconAppear() {
  var introText = document.querySelector(".whatsapp-icon");
  var introPosition = introText.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 0.5;

  if (introPosition < screenPosition) {
      introText.classList.add("whatsapp-appear");
  } else {
      introText.classList.remove("whatsapp-appear");
  }
}

function scrollCallIconAppear() {
  var introCall = document.querySelector(".call-icon");
  var introPosition = introCall.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 0.5;

  if (introPosition < screenPosition) {
      introCall.classList.add("call-appear");
  } else {
      introCall.classList.remove("call-appear");
  }
}


window.addEventListener("scroll", scrollCallIconAppear);
window.addEventListener("scroll", scrollWhatsappIconAppear);

$(document).ready(function() {
  $('.maps').click(function () {
      $('.maps iframe').css("pointer-events", "auto");
  });
  
  $( ".maps" ).mouseleave(function() {
    $('.maps iframe').css("pointer-events", "none"); 
  });
});

document.querySelector("#close").addEventListener("click", () => {
  document.querySelector(".popup-wrapper").style.transform = "scale(0)";
  document.querySelector(".popup-wrapper").style.visibility = "hidden";
})

document.querySelector("#close1").addEventListener("click", () => {
  document.querySelector(".popup-wrapper").style.transform = "scale(0)";
  document.querySelector(".popup-wrapper").style.visibility = "hidden";
})

const nameInput = document.querySelector("#name");
const email1 = document.querySelector("#email");
const message1 = document.querySelector("#message");
const errorNodes = document.querySelectorAll(".error");

function validateForm() {

  clearMessage();
  let errorFlag = false;

  if (nameInput.value.length < 1) {
    errorNodes[0].innerText = "Nombre requerido";
    nameInput.classList.add(".error-border");
    errorFlag = true;
  } 

  if (!emailIsValid(email1.value)) {
      errorNodes[1].innerText = "Email Invalido";
      email1.classList.add(".error-border");
      errorFlag = true;
  } 

  if (message1.value.length < 1) {
    errorNodes[2].innerText = "Mensaje requerido";
    message1.classList.add(".error-border");
    errorFlag = true;
  } 

  if (!errorFlag) {
    sendEmail(nameInput, email1, message1);
    setTimeout(() => {
      document.querySelector(".popup-wrapper").style.transform = "scale(1)";
      document.querySelector(".popup-wrapper").style.visibility = "visible";
      const field = document.querySelector(".contact-form");
      field.reset();
      errorFlag = false;
    }, 1000)
  }
}

function clearMessage() {
  for (let i = 0; i < errorNodes.length; i++) {
    errorNodes[i].innerText = "";
  }
  nameInput.classList.remove(".error-border");
  email1.classList.remove(".error-border");
  message1.classList.remove(".error-border");
}

function emailIsValid(email1) {
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email1);
}

function clearInputs() {
  const field = document.querySelectorAll(".field");
  field.value = "";
}

function sendEmail(nameInput, email1, message1) {
    Email.send({
        SecureToken : "2eac837e-c087-4ce7-9eb9-b7e9d84420e6",
        To : "galocelebraciones@hotmail.com",
        From : email1.value,
        Subject : "Galo consultas",
        Body: `${nameInput.value}, ${message1.value}`
    }).then(
      msg => alert("El email se ha enviado")
    );
}


//E925DD7E9CF43A3B798AC5DAE5ED365F05FE
//49420E70E6C0F73A526B185363623F5F1BBE
//280CACE0BE6E2B16FEC24F12AA8EEA2E4384
//9d0ef95b-bd44-4adb-8f69-5a61621dbfa0
//799A6C66EC324168C036E4E8BF0C6552E619