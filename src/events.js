import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEvent } from './store/slices/events';

export const Events = () => {
  const events = useSelector((state) => state.events.events);
  const dispatch = useDispatch();

  return (
    <>
      <h1>We made it!</h1>
      <div>
        <span>
          <button onClick={() => dispatch(addEvent())}>Add Event</button>
        </span>
        <span>Total: {events}</span>
      </div>
    </>
  );
};
