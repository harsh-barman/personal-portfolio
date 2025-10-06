import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // always scroll to top when route changes
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    // you can also use "smooth" if you want smooth animation
  }, [pathname]);

  return null;
}
