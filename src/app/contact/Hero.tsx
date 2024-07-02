import React, { ReactNode } from "react";
interface Props {
  children?: ReactNode;
}
export default function Hero({ children }: Props) {
  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `url('/hero_contact_us.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: 'no-repeat',
        maxHeight:'390px'
      }}
    >
      {children}
    </div>
  );
}
