import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/store';
import { decrement, increment } from '@/store/slice/counterSlice';

import styles from './index.module.scss';

const Home = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button aria-label="Increment value" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <span className={styles.count}>{count}</span>
      <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
};

export default Home;
