"use server";
import { z } from "zod";
import { api } from "@/trpc/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const mealSchema = z.object({
  id: z.string(),
  name: z.string(),
});

const itemSchema = z.object({
  id: z.string(),
  name: z.string(),
  amount: z.string(),
  category: z.string(),
  // mealId: z.string(),
  // userId: z.string(),
});

const CreateMeal = mealSchema.omit({ id: true });
const CreateItem = itemSchema.omit({ id: true });

export async function createMeal(formData: FormData) {
  const { name } = CreateMeal.parse({
    name: formData.get("name"),
  });

  await api.meal.createMeal.mutate({ name });
  formData.set("name", ""), revalidatePath("/dashboard");
  redirect("/dashboard/meals");
}

export async function createItem(id: string, formData: FormData) {
  const { name, amount, category } = CreateItem.parse({
    name: formData.get("name"),
    amount: formData.get("amount"),
    category: formData.get("category"),
  });
  await api.item.createItem.mutate({ name, amount, category, id });
  formData.set("name", ""),
    formData.set("amount", ""),
    formData.set("category", ""),
    revalidatePath(`/dashboard/meals/${id}/edit`);
}
