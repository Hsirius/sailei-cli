import { useDispatch, useSelector } from 'react-redux';

<%_ if (hasAntd) { _%>
  import { Button, Space } from "antd";
  import { CoffeeOutlined } from "@ant-design/icons";
<%_ } _%>

import SvgIcon from '@/components/SvgIcon';
import { RootState } from '@/store';
import { decrement, increment } from '@/store/slice/counterSlice';

import styles from './index.module.scss';

const Home = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>
        <%_ if (hasAntd) { _%>
          <CoffeeOutlined className={styles.icon} />
        <%_ } _%>
        <span>welcome use sailei-cli</span>
      </h1>
      <h3 className={styles.count}>
        <SvgIcon name="houhou" size="24" style={{ marginRight: '8px' }} /> count: {count}
      </h3>
      <%_ if (hasAntd) { _%>
        <Space>
          <Button onClick={() => dispatch(increment())}>Increment</Button>
          <Button onClick={() => dispatch(decrement())}>Decrement</Button>
        </Space>
        <%_ } else { _%>
          <button aria-label="Increment value" onClick={() => dispatch(increment())}>
            Increment
          </button>
          <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
            Decrement
          </button>
      <%_ } _%>
    </div>
  );
};

export default Home;
