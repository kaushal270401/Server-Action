"use server";

export async function handleForm(formData: FormData) {
  console.log("===formData ", formData);
  const name = formData.get("name");
  const username = formData.get("username");

  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify({
      name,
      username,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  console.log("===res ", res.status, res.statusText);
}