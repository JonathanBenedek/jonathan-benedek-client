import './App.css';
import {
  decrement,
  increment,
  incrementByAmount,
} from './store/counterSlice.ts';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store/store.ts';

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
}

export default App;
