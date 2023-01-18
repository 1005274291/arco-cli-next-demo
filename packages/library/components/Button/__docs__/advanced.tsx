import React from 'react';
import Button from '..';

export default function () {
  return (
    <div>
      <Button content="Success" status="success" />
      <Button content="Warning" status="warning" />
      <Button content="Danger" status="danger" />
    </div>
  );
}
