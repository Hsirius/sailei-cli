import { useDispatch, useSelector } from "react-redux";

import { CoffeeOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";

import { RootState } from "@/store";
import { decrement, increment } from "@/store/slice/counterSlice";

import styles from "./index.module.scss";

const Home = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>
        <CoffeeOutlined className={styles.icon} />
        <span>welcome use sailei-cli</span>
      </h1>
      <h3 className={styles.count}>count: {count}</h3>
      <Space>
        <Button onClick={() => dispatch(increment())}>Increment</Button>
        <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      </Space>
    </div>
  );
};

export default Home;
