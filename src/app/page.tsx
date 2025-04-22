import React from "react";
import "../sass/main.scss";

async function loader() {
  try {
    const path = "/api/home-page";
    const BASE_URL = "http://127.0.0.1:1337"; // safer than localhost
    const url = new URL(path, BASE_URL);

    const response = await fetch(url.href);

    if (!response.ok) {
      throw new Error(`Fetch failed with status ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return { ...data };
  } catch (error) {
    console.error("Loader error:", error);
    return { data: null };
  }
}

export default async function Home() {
  const { data } = await loader();
  console.log(data);
  return (
    <div>
      <h1>{data.title}</h1>
      <h2>{data.description}</h2>
    </div>
  );
}
