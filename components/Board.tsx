'use client';

import React, { useEffect, useState } from 'react';
import Column from './Column';
import BurnBarrel from './BurnBarrel';

type CardT = {
  title: string;
  id: string;
  column: string;
};

export default function Board() {
  const [cards, setCards] = useState<CardT[]>([]);
  const [hasChecked, setHasChecked] = useState(false);

  useEffect(() => {
    if (hasChecked) {
      localStorage.setItem('cards', JSON.stringify(cards));
    }
  }, [cards, hasChecked]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cardData = localStorage.getItem('cards');
      setCards(cardData ? JSON.parse(cardData) : []);
      setHasChecked(true);
    }
  }, []);

  return (
    <div className='flex h-full w-full gap-3 overflow-hidden p-12'>
      <Column
        title='Backlog'
        column='backlog'
        headingColor='text-neutral-500'
        cards={cards}
        setCards={setCards}
      />
      <Column
        title='TODO'
        column='todo'
        headingColor='text-yellow-200'
        cards={cards}
        setCards={setCards}
      />
      <Column
        title='In progress'
        column='doing'
        headingColor='text-blue-200'
        cards={cards}
        setCards={setCards}
      />
      <Column
        title='Complete'
        column='done'
        headingColor='text-emerald-200'
        cards={cards}
        setCards={setCards}
      />
      <BurnBarrel setCards={setCards} />
    </div>
  );
}
