export const forgotPassword = (email) => {
  const users = JSON.parse(sessionStorage.getItem("users") || "[]");
  if (users.filter((user) => user.email === email).length) {
    const password = users.filter((user) => user.email === email)[0].password;
    console.log(password);
    return { code: 200, message: password };
  } else {
    return { code: 404, message: "Usuário não encontrado" };
  }
};
