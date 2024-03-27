"use client"
import { Toaster } from "react-hot-toast";

type Props = {
    children: React.ReactNode;
};

const ToasterProvider = ({children}:Props) => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
        {children}
    </div>
  );
};

export default ToasterProvider;
