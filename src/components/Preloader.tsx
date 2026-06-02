import { useEffect, useState } from "react";

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let hideTimer = 0;

    const hide = () => {
      setLeaving(true);
      hideTimer = window.setTimeout(() => setVisible(false), 640);
    };

    const maxTimer = window.setTimeout(hide, 1800);

    const finish = () => {
      window.clearTimeout(maxTimer);
      hideTimer = window.setTimeout(hide, 520);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(maxTimer);
      window.removeEventListener("load", finish);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`preloader fixed inset-0 z-[100] grid place-items-center bg-background ${leaving ? "preloader-leaving" : ""}`}>
      <div className="relative grid h-28 w-28 place-items-center">
        <span className="absolute inset-0 rounded-full border border-white/10" />
        <span className="preloader-ring absolute inset-0 rounded-full" />
        <img
          src="/images/symbol.svg"
          alt=""
          aria-hidden="true"
          className="preloader-symbol h-16 w-16 object-contain"
        />
      </div>
    </div>
  );
}
