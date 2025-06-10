import { z } from "zod"

export const zAppResult = z.object({
  success: z.boolean(),
  message: z.string(),
})
