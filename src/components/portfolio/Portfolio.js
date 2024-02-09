import { useState } from "react";
import { useEffect } from "react";
import { scroller } from "react-scroll";

import "./style/main.css";
import "./style/main.min.css";
import "font-awesome/css/font-awesome.min.css";
import Head from "./children/Head";

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // window.innerWidth < 768
      //   ? setMobileMenuOpen(true)
      //   : setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const triggerNavItem = (id) => {
    // console.log(id);
    scroller.scrollTo(id, { smooth: true });
  };

  const triggerMobileNavItem = (id) => {
    setMobileMenuOpen(false);
    triggerNavItem(id);
  };

  let bodyClasses = "relative";
  if (mobileMenuOpen) {
    bodyClasses += " overflow-hidden max-h-screen";
  }

  return (
    <div className={bodyClasses}>
      <div id="main" className="relative">
        <Head
          triggerNavItem={triggerNavItem}
          setMobileMenuOpen={setMobileMenuOpen}
          mobileMenuOpen={mobileMenuOpen}
          triggerMobileNavItem={triggerMobileNavItem}
        />
      </div>
    </div>
  );
}
