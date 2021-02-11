import React, {ReactNode} from 'react'

type BigCardProps = {
  children: ReactNode;
  title: string;
}

function BigCard({children, title}: BigCardProps) {

  return (
    <div className="col schedule">
      <div className="ribbon">
        <h3 className="whiteText centerText">{title}</h3>
      </div>
      {children}
    </div>


  );
}

export default BigCard;