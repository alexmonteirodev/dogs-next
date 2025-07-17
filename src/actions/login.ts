"use server";

const login = async (formData: FormData) => {
  const username = formData.get("username") as string | null;
  const password = formData.get("password") as string | null;

  console.log(username, password);
};

export default login;
