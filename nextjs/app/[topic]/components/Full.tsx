"use client";
// move use client into children

import { useEffect, useState } from "react";

export default function Full({ data }: any) {
  const [audience, setAudience] = useState("10");
  useEffect(() => {
    const currentAudience = window.localStorage.getItem("audience");
    if (currentAudience) setAudience(currentAudience);
  }, []);
  return <>{JSON.stringify(data)}</>;
}
