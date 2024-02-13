import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greetingSlice';

export default function Greeting() {
  const { greeting } = useSelector((store) => store.greeting);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <>
      <h1>{greeting}</h1>
      <button type="button" onClick={() => dispatch(fetchGreeting())}>
        New Greeting
      </button>
    </>
  );
}
