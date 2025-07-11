import NotionKanban from '@/components/NotionKanban';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='h-screen w-full flex justify-center items-center border'>
      <NotionKanban />
    </div>
  );
}
