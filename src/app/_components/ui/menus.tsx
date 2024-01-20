const data = [
  {
    id: "lkjasdf",
    name: "Burgers",
  },
  {
    id: "lkjasdf3",
    name: "Burgers2",
  },
  {
    id: "lkja5sdf",
    name: "Burgers3",
  },
  {
    id: "lkja7sdf",
    name: "Burgers4",
  },
  {
    id: "lkjasd88f",
    name: "Burgers5",
  },
];

export default function Menus() {
  return (
    <div className="flex h-16 w-full items-center justify-center gap-16 overflow-x-scroll p-4">
      {data.map((meal) => {
        return (
          <div key={meal.id} className="w-2/5 px-4">
            {meal.name}
          </div>
        );
      })}
    </div>
  );
}
