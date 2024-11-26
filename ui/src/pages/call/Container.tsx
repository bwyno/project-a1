import React from "react";
import { Member } from "./Member";

export const Container = () => {
  const [openCall, setOpenCall] = React.useState<boolean>(false);
  return (
    <div className="h-full flex items-center justify-center">
      {!openCall ? (
        <div
          className="bg-[#181C14] h-[100px] w-[100px] flex items-center justify-center rounded-[20px] cursor-pointer"
          onClick={() => {
            setOpenCall(true);
          }}
        >
          Join Call
        </div>
      ) : (
        <div className="h-full bg-[#181C14] w-full rounded-[30px] px-[20px]  pt-[20px]">
          <div className="h-[calc(100%-50px)] grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 overflow-auto ">
            <Member />
            <Member />
            <Member />
            <Member />
            <Member />
          </div>
          <div className="h-[50px] flex items-center justify-center">
            <div
              className="rounded-[20px] border-2 h-[40px] w-[100px] flex items-center justify-center cursor-pointer "
              onClick={() => {
                setOpenCall(false);
              }}
            >
              Leave Call
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
