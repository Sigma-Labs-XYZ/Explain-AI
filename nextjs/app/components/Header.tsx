"use client";
import useLocal from "use-local-storage-state";

export default function Header() {
  const [audience, setAudience] = useLocal("audience", { defaultValue: "10" });
  return (
    <>
      <button
        onClick={() => {
          setAudience(audience === "5" ? "10" : "5");
        }}
      >
        test
      </button>
      header
    </>
  );
}
