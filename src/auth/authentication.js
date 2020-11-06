import api from "../services/api";

export const isAuthenticated = () => {
  const auth = localStorage.getItem("@HIGYA_TOKEN");
  if (!auth) return false;
  return true;
};

export const singIn = async (emailValue, passwordValue, history) => {
  if (emailValue !== "" && passwordValue !== "") {
    const response = await api.post("/authentication", {
      email: emailValue,
      password: passwordValue,
    });
    // console.log(response);
    if (response.data.error === true)
      return alert("Usuário ou senha incorreto(s).");

    const user_id = response.data.user_id;
    const token = response.data.token;

    localStorage.setItem("@HIGYA_USER", user_id);
    localStorage.setItem("@HIGYA_TOKEN", token);

    history.push("/");
  } else {
    alert("Preencha todos os campos");
  }
};

export const logout = () => {
  localStorage.removeItem("@HIGYA_USER");
  localStorage.removeItem("@HIGYA_TOKEN");
  window.location.reload();
};
