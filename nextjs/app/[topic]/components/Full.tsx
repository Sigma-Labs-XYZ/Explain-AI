"use client";

import { useEffect, useState } from "react";

export default function Full({ data: { name, slug } }: any) {
  const [audience, setAudience] = useState("10");
  useEffect(() => {
    const currentAudience = window.localStorage.getItem("audience");
    if (currentAudience) setAudience(currentAudience);
  }, []);
  return (
    <>
      full for {name} audience {audience || "10"}
    </>
  );
}
