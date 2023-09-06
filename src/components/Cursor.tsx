import React, { useEffect } from "react";

function Cursor() {
  useEffect(() => {
    let cursor = document.querySelector(".custom-cursor") as HTMLElement;

    document.addEventListener("mousemove", (e) => {
      if (cursor) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    });

    return () => {
      document.removeEventListener("mousemove", () => {});
    };
  }, []);

  return (
    <div className="w-10 h-10 border-2 border-black rounded-full ation-200 ease-in-out origin-center custom-cursor"></div>
  );
}

export default Cursor;
