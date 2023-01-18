import React from 'react';
import { Select } from '@arco-design/web-react';
import { UserSelectProps } from './interface';

export default function UserSelect(props: UserSelectProps) {
  const { size, selectProps } = props;
  return (
    <Select size={size} {...selectProps} />
  );
}
