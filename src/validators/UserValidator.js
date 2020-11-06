const UserValidator = (fullNameValue, emailValue, passwordValue, User) => {
  if (fullNameValue === "") {
    return alert("O nome é obrigatorio");
  } else if (emailValue.length === 0) {
    return alert("O e-mail é obrigatorio");
  } else if (passwordValue.length === 0) {
    return alert("Digite uma senha");
  } else {
    return User();
  }
};

export default UserValidator;
