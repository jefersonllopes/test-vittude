export const createUser = (email, password) => {
  const users = JSON.parse(sessionStorage.getItem("users") || "[]");
  if (users.filter((user) => user.email === email).length > 0) {
    return { code: 409, message: "Usuário já cadastrato" };
  } else {
    users.push({ email: email, password: password });
    sessionStorage.setItem("users", JSON.stringify(users));
    return { code: 200, message: "Usuário cadastrato" };
  }
};
