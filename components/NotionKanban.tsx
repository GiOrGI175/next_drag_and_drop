'use client';

import React from 'react';
import Board from './Board';

export default function NotionKanban() {
  return (
    <div className='h-screen w-full bg-neutral-900 text-neutral-50'>
      <Board />
    </div>
  );
}
