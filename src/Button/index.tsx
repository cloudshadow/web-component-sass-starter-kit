import React from 'react';
import { IButtonProps } from './type';
import './index.scss';

const Button: React.FunctionComponent<IButtonProps> = ({
  children,
  className,
  disabled = false,
  fullWidth = false,
  onClick,
  size = 'medium',
  theme = 'primary',
  ...props
}) => {
  return (
    <button
      {...props}
      className={[
        'button-container',
        `${size}`,
        `${disabled ? 'disabled' : theme}`,
        `${className ? className : ''}`,
        `${fullWidth ? 'full-width' : ''}`,
      ]
        .filter((attr) => attr !== null)
        .join(' ')}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };
