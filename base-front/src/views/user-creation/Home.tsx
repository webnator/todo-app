'use client';
import { KeyboardEvent, useContext, useState } from 'react';
import HomeContext from './HomeContext';
import { useRouter } from 'next/navigation';
import StaggeredText from '@sandbox/infra/components/StaggeredText';

const Home = (): JSX.Element => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error('Context not defined');
  }
  const router = useRouter();
  const { data: { user }, createUser } = context;

  const [ fullname, setFullName ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);
  const handleEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setIsLoading(true);
      createUser(fullname).then(() => {
        router.replace('/welcome');
        setIsLoading(false);
      });
    }
  }

  if (user) {
    router.replace('/welcome');
  }
  
  return (
    <div className="flex h-screen">
      <main className="">
        <div className="flex flex-col items-center justify-center h-screen px-60">
          {user ? 
            <h1 className="text-6xl font-bold text-center leading-relaxed animate-slidein opacity-0">Give me a second...</h1> : 
            <>
              <StaggeredText>Hey, I haven&apos;t seen you around before. What&apos;s your name?</StaggeredText>
              <input
                type="text"
                data-testid="user-fullName"
                className="animate-slidein opacity-0 w-80 p-3 text-lg border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-slate-200 transition-colors"
                placeholder="William Wallace..."
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
                onKeyDown={handleEnter}
                disabled={isLoading}
              />
            </>
          }
        </div>
      </main>
    </div>
  );
};

export default Home;
