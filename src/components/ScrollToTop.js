import { useState, useEffect } from "react";

export const ScrollToTop = () => {
  const [scrollTopBtn, setScrollTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScrollTopBtn(true);
      } else {
        setScrollTopBtn(false);
      }
    });
  }, []);

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="scroll-top__wrap">
      <div className="grid">
        <div className="scroll-top">
          {scrollTopBtn && (
            <div>
              <img src="assets/up.svg" alt="" onClick={toTop} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
