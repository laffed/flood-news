import React from 'react'


function BigCard({children}) {

  return (
    <div className="bigcard-wrapper">
      {children}
    </div>
  );
}

export default BigCard;