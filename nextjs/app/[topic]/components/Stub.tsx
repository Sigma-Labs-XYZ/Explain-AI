"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Stub({ data: { name, slug } }: any) {
  const router = useRouter();
  useEffect(() => {
    (async () => {
      // await fetch(`api/generate`, { body: { name } });
      // revalidate
      // router.replace(`/${slug}`);
    })();
  }, []);

  return <>stub for {name}</>;
}
