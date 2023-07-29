import { useAppDispatch, useAppSelector } from '../../hook';
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
} from './counterSlice';

const Counter = () => {
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const incrementCount = () => {
    dispatch(increment());
  };

  const decrementCount = () => {
    dispatch(decrement());
  };

  const incrementByCount = () => {
    dispatch(incrementByAmount(5));
  };

  const incrementAsyncCount = () => {
    dispatch(incrementAsync(7));
  };

  const incrementConditionally = () => {
    dispatch(incrementIfOdd(7));
  };

  return (
    <div>
      <button onClick={decrementCount}> Decrement</button>
      <p> Count: {counter}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={incrementByCount}>Increment by count</button>
      <button onClick={incrementAsyncCount}>Increment Async</button>
      <button onClick={incrementConditionally}>Increment If Odd </button>
    </div>
  );
};

export default Counter;
