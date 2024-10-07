'use client';
import { useRouter } from 'next/navigation';
import { useContext, useState, KeyboardEvent } from 'react';
import WelcomeContext from './WelcomeContext';
import StaggeredText from '@sandbox/infra/components/StaggeredText';
import Button from '@sandbox/infra/components/Button';

const Welcome = (): JSX.Element => {
  const context = useContext(WelcomeContext);
  const router = useRouter();
  const [ isLoading, setIsLoading ] = useState(false);
  const [ hasCode, setHasCode ] = useState(false);
  const [ listCode, setListCode ] = useState('');
  
  if (!context) {
    throw new Error('Context not defined');
  }
  
  const { data: { user }, createList } = context;

  if (!user) {
    router.replace('/');
  }

  async function goToNewList() {
    try {
      setIsLoading(true);
      const list = await createList.mutateAsync();
      router.push(`/lists/${list.sharedKey}`);
    } catch (error) {

    } finally {
      setIsLoading(false);
    }
  }

  const handleEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      router.push(`/lists/${listCode}`);
    }
  }
  
  return (
    <div className="flex h-screen">
      <main className="">
        <div className="flex flex-col items-center justify-center h-screen px-60">
          {!user ? 
            <h1 className="text-6xl font-bold text-center leading-relaxed animate-slidein opacity-0">Give me a second...</h1> : 
            <>
              <StaggeredText>
                Welcome {user.fullName.split(' ')[0]}, Are you here to start a new task list? Or do you have a code for an existing one?
              </StaggeredText>
              { !hasCode && 
                <div className="flex flex-row gap-8">
                  <Button
                    onClick={goToNewList}
                    disabled={isLoading}
                  >
                    New one
                  </Button>
                  <Button
                    onClick={() => setHasCode(true)}
                    disabled={isLoading}
                  >
                    I have a code
                  </Button>
                </div>
              }

              { hasCode && 
                <>
                  <StaggeredText>
                    Great! Please enter the code
                  </StaggeredText>
                  <input
                    type="text"
                    className="mb-12 animate-slidein opacity-0 w-80 p-3 text-lg border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-slate-200 transition-colors"
                    placeholder="mister-ks-coyote-29..."
                    value={listCode}
                    onChange={(e) => setListCode(e.target.value)}
                    onKeyDown={handleEnter}
                    disabled={isLoading}
                  />

                  <Button
                    onClick={() => setHasCode(false)}
                    disabled={isLoading}
                  >
                    No code, sorry
                  </Button>
                </>
              }
              
            </>
          }
        </div>
      </main>
    </div>
  );
};

export default Welcome;
