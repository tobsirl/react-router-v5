import React from 'react';

export default function HolyGrail() {
  return (
    <React.Fragment>
      <body className="ex5">
        <header className="ex5">
          <h1 contenteditable>Header.com</h1>
        </header>
        <div class="left-sidebar ex5" contenteditable>
          Left Sidebar
        </div>
        <main contenteditable className="ex5"></main>
        <div class="right-sidebar ex5" contenteditable>
          Right Sidebar
        </div>
        <footer contenteditable className="ex5">
          Footer Content — Header.com 2020
        </footer>
      </body>
    </React.Fragment>
  );
}
