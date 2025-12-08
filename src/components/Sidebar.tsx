import { FilePdfFilled, GithubFilled, LinkedinFilled } from '@ant-design/icons';
import React from 'react';

export default function Sidebar() {
  return (
    <div className="fixed w-fit left-0 top-1/2 hidden md:block -translate-y-1/2 ml-4">
      <div className="sidebar">
        <a
          className="sidebar-link"
          href="https://docs.google.com/document/d/14uTJA8ZUPIWCi2V-f8s8ul3-qnQsKfiF/export?format=pdf"
          title="Download Resume"
        >
          <FilePdfFilled />
        </a>
        <a
          className="sidebar-link"
          href="https://www.linkedin.com/in/michael-lee-8967b614a/"
          title="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinFilled />
        </a>
        <a
          className="sidebar-link"
          href="https://github.com/MichaelMauriceLee"
          title="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubFilled />
        </a>
      </div>
    </div>
  );
}
