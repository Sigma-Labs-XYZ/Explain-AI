"use client";

import { useEffect } from "react";
// import { useRouter } from "next/navigation";

export default function Stub({ data }: any) {
  // const router = useRouter();
  useEffect(() => {
    (async () => {
      await fetch(`api/revalidate?slug=${data.slug}`);
      // await fetch(`api/generate`, { body: { name, slug } });
      // revalidate
      // router.replace(`/${slug}`);
    })();
  }, []);

  return <>{JSON.stringify(data)}</>;
}
