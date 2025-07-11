'use client';

import React, { useState } from 'react';
import Column from './Column';
import { DEFAULT_CARDS } from '@/common/defaultCards';
import BurnBarrel from './BurnBarrel';

export default function Board() {
  const [cards, setCards] = useState(DEFAULT_CARDS);
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
