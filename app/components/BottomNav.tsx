import { Link } from "react-router";

export function BottomNav() {
  return (
    <footer className='fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t'>
      <div className='grid h-full max-w-lg grid-cols-5 mx-auto font-medium'>
        <Link
          to='/home'
          className='inline-flex flex-col items-center justify-center px-5'
        >
          🏠
        </Link>
        <div className='inline-flex flex-col items-center justify-center px-5'>
          🔍
        </div>
        <Link
          to='/home'
          className='inline-flex flex-col items-center justify-center px-5'
        >
          ➕
        </Link>
        <Link
          to='/'
          className='inline-flex flex-col items-center justify-center px-5'
        >
          Reels
        </Link>
        <Link
          to='/profile'
          className='inline-flex flex-col items-center justify-center px-5'
        >
          👤
        </Link>
      </div>
    </footer>
  );
}
