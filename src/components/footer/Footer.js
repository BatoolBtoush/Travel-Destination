import React from 'react';
import "./Footer.css"

function Footer() {
  return (
    <div className='footer'>
    <div className='Facebook'>
      <p>
        {" "}
        <a style={{ color: "white" }} href="https://www.facebook.com/">
          Facebook
        </a>
      </p>
      </div>
      <div className='Instagram'>
      <p>
        {" "}
        <a style={{ color: "white" }} href="https://www.instagram.com/">
          Instagram
        </a>
      </p>
      </div>
      <div className='Twitter'>
      <p>
        {" "}
        <a style={{ color: "white" }} href="https://twitter.com/?lang=en">
          Twitter
        </a>
      </p>
      </div>
      <div className='author'>
      <p style={{ color: "white" }}>
        Author of the document: Batool Ragaya'h
      </p>
      </div>
    </div>
  );
}

export default Footer;
