import React from 'react';
import { Button as ArcoButton } from '@arco-design/web-react';
import { ButtonProps } from './interface';

export default function Button(props: ButtonProps) {
  const { size, content, status } = props;
  return (
    <ArcoButton size={size} status={status}>
      {content}
    </ArcoButton>
  );
}
