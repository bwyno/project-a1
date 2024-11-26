import { Container } from "./Container";
import { List } from "./List";

export const Call = () => {
  return (
    <div className="h-full flex flex-row p-[20px] gap-[20px]">
      <div className="border-r-2 border-[#353a3146] w-[300px] bg-[#181C14] rounded-[30px] overflow-hidden p-[10px] flex-none">
        <List />
      </div>
      <div className="w-[100%] text-white">
        <Container />
      </div>
    </div>
  );
};
