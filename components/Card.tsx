'use client';

import React, { useRef, useEffect } from 'react';
import DropIndicator from './DropIndicator';
import { CardT } from './Column';
import { motion } from 'framer-motion';

type CardPropsT = {
  title: string;
  id: string;
  column: string;
};

export default function Card({ title, id, column }: CardPropsT) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleDragStart = (card: CardT, dataTransfer: DataTransfer) => {
    dataTransfer.setData('cardId', card.id);
  };

  useEffect(() => {
    const cardElement = cardRef.current;
    if (cardElement) {
      const dragStartHandler = (e: DragEvent) => {
        if (e.dataTransfer) {
          handleDragStart({ id, title, column }, e.dataTransfer);
        }
      };

      cardElement.addEventListener('dragstart', dragStartHandler);
      return () => {
        cardElement.removeEventListener('dragstart', dragStartHandler);
      };
    }
  }, [id, title, column]);

  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        ref={cardRef}
        layout
        layoutId={id}
        draggable='true'
        className='cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing'
      >
        <p className='text-sm text-neutral-100'>{title}</p>
      </motion.div>
    </>
  );
}
