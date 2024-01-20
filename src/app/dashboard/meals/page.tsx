import { api } from "@/trpc/server";
import Link from "next/link";
export default async function Page() {
  const meals = api.meal.getMeals.query();

  return (
    <div>
      {(await meals)?.map((meal) => {
        const id = meal.id;
        return (
          <p key={meal.id}>
            <Link href={`/dashboard/meals/${id}/edit`}>{meal.name}</Link>
          </p>
        );
      })}
    </div>
  );
}
