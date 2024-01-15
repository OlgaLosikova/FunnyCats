function validateForm() {

  let login = document.forms["catForm"]["login"].value;
  if (login == "") {
    alert("Пожалуйста, введите Ваш логин.");
    return false;
  }

  let name = document.forms["catForm"]["name"].value;
  if (name == "") {
    alert("Пожалуйста, введите Ваше имя.");
    return false;
  }

  let email = document.forms["catForm"]["email"].value;
  if (email == "") {
    alert("Пожалуйста, введите Ваш email.");
    return false;
  }
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(emailRegex)) {
    alert("Пожалуйста, введите действительный адрес электронной почты.");
    return false;
  }

  let nickname = document.forms["catForm"]["nickname"].value;
  if (nickname == "") {
    alert("Пожалуйста, введите кличку Вашего питомца.");
    return false;
  }

  let breed = document.forms["catForm"]["breed"].value;
  if (breed == "") {
    alert("Пожалуйста, выберите породу Вашей кошки.");
    return false;
  }

  let color = document.forms["catForm"]["color"].value;
  if (color == "") {
    alert("Пожалуйста, введите окрас Вашей кошки.");
    return false;
  }

  let age = document.forms["catForm"]["age"].value;
  if (age == "") {
    alert("Пожалуйста, введите возраст Вашей кошки.");
    return false;
  }

  let gender = document.forms["catForm"]["gender"].value;
  if (gender == "") {
    alert("Пожалуйста, введите пол Вашей кошки.");
    return false;
  }

  let password = document.forms["catForm"]["password"].value;
  if (password == "") {
    alert("Пожалуйста, введите пароль.");
    return false;
  }

  let repeatPassword = document.forms["catForm"]["repeatPassword"].value;
  if (repeatPassword == "") {
    alert("Пожалуйста, введите пароль повторно.");
    return false;
  }
  if (password != repeatPassword) {
    alert("Пароли не совпадают.");
    return false;
  }

  let approval = document.forms["catForm"]["approval"].checked;
  if(!approval) {
    alert("Пожалуйста, дайте согласие на обработку данных.");
    return false;
  }
}
