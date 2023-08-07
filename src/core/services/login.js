export const login = (email, password) => {
  const users = JSON.parse(sessionStorage.getItem("users") || "[]");
  if (
    users.filter((user) => user.email === email && user.password === password)
      .length
  ) {
    return { code: 200, message: "Bem vindo" };
  } else if (
    users.filter((user) => user.email === email && user.password !== password)
      .length
  ) {
    return { code: 401, message: "Senha inválida" };
  } else {
    return { code: 404, message: "Usuário não encontrado" };
  }
};
