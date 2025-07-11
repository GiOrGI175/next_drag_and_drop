'use clients';

import React from 'react';
import DropIndicator from './DropIndicator';

type CardPropsT = { title: string; id: number; column: string };

type CardT = {
  title: string;
  id: string;
  column: string;
};

export default function Card({ title, id, column }: CardPropsT) {
  const handleDragonStart = (
    e: React.DragEvent<HTMLDivElement>,
    card: CardT
  ) => {
    e.dataTransfer.setData('cardId', card.id);
  };

  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <div
        draggable='true'
        className='cursor-grab rounded b[order border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing'
      >
        <p className='text-sm text-neutral-100'>{title}</p>
      </div>
    </>
  );
}
