import { SignIn } from "@clerk/nextjs";
import React from "react";

const Page = () => {
  return (
    <div className="flex justify-center">
      <SignIn />
    </div>
  );
};

export default Page;
