import React from "react";

const ReuBeenHeader = () => {

    const blogURL = process.env.REACT_APP_BLOG_SUBDOMAIN_URL

  return (
    <div className="reubeen-header">
      {/* <p>DBDruid</p> */}
      <a href={blogURL + 'reubeen/privacy_policy'}>Privacy Policy</a>
      <a href={blogURL + 'reubeen/support'}>Support</a>
      <a href={blogURL + 'blogs'}>Blog</a>
    </div>
  );
};

export default ReuBeenHeader;
