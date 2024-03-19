import React from "react";
import PropTypes from "prop-types";

const Dyna66 = ({ params }) => {
  // Check if params and params.Slug exist before accessing
  const title = params && params.Slug ? params.Slug : "Title";

  return (
    <div className="lg:basis-2/3 flex flex-col top-0">
      <div className="flex flex-col gap-6 items-start justify-start flex-1 relative">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

// PropTypes for Dyna66 component
Dyna66.propTypes = {
  params: PropTypes.object // Assuming params is an object, adjust as necessary
};

export default Dyna66;
