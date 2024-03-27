"use client"
import { Toaster } from "react-hot-toast";

type Props = {
    children: React.ReactNode;
};

// ToasterProvider component that wraps the Toaster component in client side
const ToasterProvider = ({children}:Props) => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
        {children}
    </div>
  );
};

export default ToasterProvider;
