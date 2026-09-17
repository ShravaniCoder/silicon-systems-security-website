import { useEffect } from "react";

export default function ScrollToTop({ path }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [path]);

  return null;
}
