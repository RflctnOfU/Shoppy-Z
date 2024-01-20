import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

import { meals, items, users } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export const mealRouter = createTRPCRouter({
  getMeals: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.db.query.meals.findMany({
      where: eq(meals.userId, ctx.session.user.id),
    });
  }),

  getSingleMeal: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.db.query.meals.findFirst({
        where: eq(meals.id, input.id),
      });
    }),

  createMeal: protectedProcedure
    .input(z.object({ name: z.string().min(3) }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(meals).values({
        id: crypto.randomUUID(),
        name: input.name,
        userId: ctx.session.user.id,
      });
    }),
});
