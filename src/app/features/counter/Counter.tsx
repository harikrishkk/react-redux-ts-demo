import { useAppSelector } from '../../hook';

const Counter = () => {
  const counter = useAppSelector((state) => state.value);
  return (
    <div>
      <button> Decrement</button>
      <p> {counter}</p>
      <button>Increment</button>
    </div>
  );
};

export default Counter;
