import React from "react";
import "../sass/main.scss";
import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";
import { HeroSection } from "@/components/blocks/HeroSection";
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
      <HeroSection {...blocks[0]} />
    </div>
  );
}
