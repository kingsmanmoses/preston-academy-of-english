import React, { useEffect } from "react";

const FideloWidget = () => {
  useEffect(() => {
    // Load the Fidelo widget script
    const script = document.createElement("script");
    script.src =
      "https://proxy.fidelo.com/app/widget/1.0/preston/js/widget.js?c=VX4BD2KS3YWXEPQL&iframe=1";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup the script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <noscript>Please enable JavaScript to continue with this form.</noscript>
      <fidelo-widget></fidelo-widget>
    </div>
  );
};

export default FideloWidget;
