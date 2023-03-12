"use client";

export default function Header() {
  return (
    <>
      <button
        onClick={() => {
          // set local storage
          const currentAudience = window.localStorage.getItem("audience");
          window.localStorage.setItem(
            "audience",
            currentAudience === "5" ? "10" : "5"
          );
        }}
      >
        test
      </button>
      header
    </>
  );
}
