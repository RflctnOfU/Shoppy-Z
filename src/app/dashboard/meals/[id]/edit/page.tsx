import { useParams } from "next/navigation";
import { api } from "@/trpc/server";
import { createItem } from "@/app/lib/actions";

export default async function Page({ params }: { params: { id: string } }) {
  const meal = await api.meal.getSingleMeal.query({ id: params.id });
  const items = await api.item.getMealItems.query({ id: params.id });
  const createItemWithId = createItem.bind(null, params.id);
  return (
    <div>
      <div>{meal!.name}</div>
      <form action={createItemWithId}>
        <div>
          <label htmlFor="name">Item Name</label>
          <input
            type="text"
            name="name"
            className="border border-main-border"
          />
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            name="amount"
            className="border border-main-border"
          />
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <select name="category" id="">
            <option value="produce">Produce</option>
            <option value="meat">meat</option>
            <option value="grain">grain</option>
            <option value="dairy">dairy</option>
            <option value="frozen">frozen</option>
            <option value="snacks">snacks</option>
          </select>
        </div>
        <button type="submit" className="rounded-md bg-main-tertiary p-2">
          Add Item
        </button>
      </form>
      <div>
        <h2>items:</h2>
        <div>
          {items
            ? items.map((item) => {
                return <p key={item.id}>{item.name}</p>;
              })
            : null}
        </div>
      </div>
    </div>
  );
}
