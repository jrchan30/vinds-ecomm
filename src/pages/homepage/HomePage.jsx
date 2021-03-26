import React from "react";
import Directory from "../../components/Directory";
import PageWrapperAnimate from "../../components/layouts/PageWrapperAnimate";

const HomePage = () => {
  return (
    <PageWrapperAnimate>
      <div className="mt-10">
        <Directory />
      </div>
    </PageWrapperAnimate>
  );
};

export default HomePage;
