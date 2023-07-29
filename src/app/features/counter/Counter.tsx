import { useAppDispatch, useAppSelector } from '../../hook';
import { decrement, increment } from './counterSlice';

const Counter = () => {
  const counter = useAppSelector((state) => state.value);
  const dispatch = useAppDispatch();

  const incrementCount = () => {
    dispatch(increment());
  };

  const decrementCount = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <button onClick={decrementCount}> Decrement</button>
      <p> Count: {counter}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default Counter;
