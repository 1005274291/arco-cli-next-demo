import React from 'react';
import UserSelect from '..';

export default function () {
  return (
    <UserSelect
      selectProps={{
        mode: 'multiple',
        placeholder: 'Please select users',
        options: ['Alice', 'Bob', 'Candy'],
      }}
    />
  );
}
