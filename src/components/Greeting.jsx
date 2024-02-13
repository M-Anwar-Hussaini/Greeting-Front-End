import React, { useEffect, useState } from 'react';

export default function Greeting() {
  const [greeting, setGreeting] = useState('');
  const [isLoaing, setIsLoading] = useState(false);
  const [flag, setFlag] = useState(1);
  useEffect(() => {
    async function fetchGreeting() {
      setIsLoading(true);
      const res = await fetch(
        'http://localhost:3000/api/v1/greeting/random_greeting',
      );
      const data = await res.json();
      setGreeting(data.greeting);
      setIsLoading(false);
    }
    fetchGreeting();
  }, [flag]);
  return (
    <>
      <h1>{isLoaing ? <>Loading...</> : greeting}</h1>
      <button type="button" onClick={() => setFlag((flag) => 1 - flag)}>
        New Greeting
      </button>
    </>
  );
}
