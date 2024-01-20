import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

import { meals, items, users } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export const itemRouter = createTRPCRouter({
  getMealItems: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.db.query.items.findMany({
        where: eq(items.mealId, input.id),
      });
    }),

  createItem: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
        amount: z.string(),
        category: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(items).values({
        id: crypto.randomUUID(),
        name: input.name,
        amount: input.amount,
        category: input.category,
        mealId: input.id,
        userId: ctx.session.user.id,
      });
    }),
});
