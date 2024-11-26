import { ListItem } from "./ListItem";

export const List = () => {
  return (
    <>
      <div className="flex h-[70px] justify-center items-center px-[10px]">
        <input
          className="h-[50px] rounded-[18px] w-full px-[10px] text-center"
          placeholder="Search People or Group"
        />
      </div>
      <div className="py-[20px] h-[calc(100%-70px)] overflow-auto px-[10px] rounded-[30px]">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </>
  );
};
