import React from "react";
import "../sass/main.scss";
import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";

import { BlockRenderer } from "@/components/BlockRenderer";
async function loader() {
  const data = await getHomePage();
  if (!data) notFound();
  console.log("data", data);

  return { ...data.data };
}
export default async function Home() {
  const data = await loader();
  const blocks = data?.blocks || [];
  console.log("data", data);

  return (
    <div>
      <BlockRenderer blocks={blocks} />
    </div>
  );
}
