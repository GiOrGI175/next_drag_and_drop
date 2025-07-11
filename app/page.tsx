import NotionKanban from '@/components/NotionKanban';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='min-h-screen w-full flex justify-center items-center  bg-neutral-900'>
      <NotionKanban />
    </div>
  );
}
