import { useEffect, useState } from "react";

export default function Dialog({
  trigger,
  children,
  id,
}: {
  id?: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (id) {
      const buttons = document.querySelectorAll(`.${id}`);
      buttons.forEach((button) => {
        button.addEventListener("click", () => setIsOpen(false));
      });
    }
  }, [isOpen]);

  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="w-full max-w-2xl bg-background border border-border rounded-lg p-4 relative z-50">
            {children}
          </div>
          <div
            className="w-full h-full flex justify-end absolute top-0 right-0 bg-black/40 z-10"
            onClick={() => setIsOpen(false)}
          ></div>
        </div>
      )}
    </>
  );
}
