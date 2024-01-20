import { createMeal } from "@/app/lib/actions";

export default async function Page() {
  return (
    <form action={createMeal}>
      <div>
        <input name="name" placeholder="Name" />
      </div>
      <button type="submit">Add New Meal</button>
    </form>
  );
}
