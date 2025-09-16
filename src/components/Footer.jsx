import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-6">
      <p>© {new Date().getFullYear()} Shivam. All Rights Reserved.</p>
      <div className="flex justify-center mt-4 space-x-6">
        <a
          href="https://github.com/shhiivm"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/shhiivm"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        {/* <a
          href="https://leetcode.com/shhiivm"
          target="_blank"
          rel="noopener noreferrer"
        >
          LeetCode
        </a> */}
      </div>
    </footer>
  );
};

export default Footer;
