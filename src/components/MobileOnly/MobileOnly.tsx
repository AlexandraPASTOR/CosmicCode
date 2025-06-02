import { useEffect, useState } from "react";

const MobileOnly = ({ children }) => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // vérifie à l'initialisation

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isMobile) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center p-4 gap-10">
        <img src="/logo-cosmic.png" alt="logo Cosmic'Code" className="h-40 p-2" />
        <h1 className="text-2xl font-semibold text-white">
          Ce site est accessible uniquement sur mobile.
        </h1>
      </div>
    );
  }

  return <>{children}</>;
};

export default MobileOnly;
