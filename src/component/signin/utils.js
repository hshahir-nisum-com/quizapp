function check(
  nameInput,
  passwordInput,
  history,
  storeUserName,
  storePassword
) {
  let user = storeUserName.find((name) =>
    name === nameInput.toLowerCase() ? true : console.log(false)
  );

  let pass = storePassword.find((password) =>
    password === passwordInput.toLowerCase() ? true : false
  );

  user && pass
    ? localStorage.setItem("isUserLoging", true)
    : localStorage.setItem("isUserLoging", false);

  if (localStorage.getItem("isUserLoging") === "true") {
    history.push("/testlist");
  }
}

export default check;
