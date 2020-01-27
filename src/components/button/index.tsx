import React from 'react';
import './style.less';

interface ButtonProps extends React.Props<any> {
  title: string;
  link: string;
}


const Button: React.FC<ButtonProps> = ({title, link}) => {
  return (
    <div className="button">
      <a href={link}>{title}</a>
    </div>
  );
}

export default Button;
