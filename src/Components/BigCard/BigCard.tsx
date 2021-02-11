import React, {ReactNode} from 'react'

type BigCardProps = {
  children: ReactNode
}

function BigCard({children}: BigCardProps) {

  return (
    <div className="bigcard-wrapper">
      {children}
    </div>
  );
}

export default BigCard;