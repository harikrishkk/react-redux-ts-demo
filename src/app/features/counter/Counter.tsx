import { useAppDispatch, useAppSelector } from '../../hook';
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
} from './counterSlice';

const Counter = () => {
  const counter = useAppSelector((state) => state.value);
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

  return (
    <div>
      <button onClick={decrementCount}> Decrement</button>
      <p> Count: {counter}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={incrementByCount}>Increment by count</button>
      <button onClick={incrementAsyncCount}>Increment Async</button>
    </div>
  );
};

export default Counter;
