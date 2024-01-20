import { postRouter } from "@/server/api/routers/post";
import { mealRouter } from "./routers/meal";
import { itemRouter } from "./routers/item";
import { createTRPCRouter } from "@/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  meal: mealRouter,
  item: itemRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
