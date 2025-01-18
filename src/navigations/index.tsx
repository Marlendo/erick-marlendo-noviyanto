import { lazy, Suspense, useEffect } from "react";

const CVScreen = lazy(() => import("#/screens/cv"));

function Navigation() {
  function removeLoading() {
    setTimeout(() => {
      const loadingEL = window.document.getElementById("loading-before-load");
      if (loadingEL) {
        loadingEL.remove();
      }
    }, 1000);
  }

  useEffect(() => {
    removeLoading();
  }, []);

  return (
    <Suspense fallback={<div />}>
      <CVScreen />
    </Suspense>
  );
}

export default Navigation;
