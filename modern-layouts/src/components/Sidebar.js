import React from 'react';

export default function Sidebar() {
  return (
    <React.Fragment>
      <body className="ex3">
        <div className="sidebar ex3" contenteditable>
          Min: 150px
          <br />
          Max: 25%
        </div>
        <p className="content ex3" contenteditable>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nulla
          architecto maxime modi nisi. Quas saepe dolorum, architecto quia fugit
          nulla! Natus, iure eveniet ex iusto tempora animi quibusdam porro?
        </p>
      </body>
    </React.Fragment>
  );
}
