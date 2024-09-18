import { Spin } from "antd";
import { Suspense } from "react";

export const Loading = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center ">
      <Spin className="custom-spin" tip="Loading..." size="large" />
    </div>
  );
};

const SuspenseElement = ({ children }: { children: JSX.Element }) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

export default SuspenseElement;
