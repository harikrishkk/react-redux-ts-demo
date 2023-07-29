import { useAppDispatch, useAppSelector } from '../../hook';
import { decrement, increment, incrementByAmount } from './counterSlice';

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

  return (
    <div>
      <button onClick={decrementCount}> Decrement</button>
      <p> Count: {counter}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={incrementByCount}>Increment by count</button>
    </div>
  );
};

export default Counter;
