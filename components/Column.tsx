import React, { useState } from 'react';
import Card from './Card';
import DropIndicator from './DropIndicator';
import AddCard from './AddCard';

type ColumnPropsT = {
  title: any;
  headingColor: any;
  column: any;
  cards: any[];
  setCards: React.Dispatch<React.SetStateAction<any[]>>;
};

export default function Column({
  title,
  headingColor,
  column,
  cards,
  setCards,
}: ColumnPropsT) {
  const [active, setActive] = useState(false);

  const filteredCards = cards.filter((item) => item.column === column);

  return (
    <div className='w-56 shrink-0'>
      <div className='mb-3 flex items-center justify-between'>
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className='rounded text-sm text-neutral-300'>{cards.length}</span>
      </div>
      <div
        className={`h-full w-full transition-colors ${
          active ? 'bg-neutral-800/50' : 'bg-neutral-800/0'
        }`}
      >
        {filteredCards.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
        <DropIndicator beforeId={-1} column={column} />
        <AddCard column={column} setCards={setCards} />
      </div>
    </div>
  );
}
