import type { z } from "zod"
import { parseMarkdown } from "./markdown/parse-markdown"
import { zMilestone } from "./models/milestone"
import { zMilestoneFrontMatter } from "./models/milestone-front-matter"

export async function parseMilestoneFile(
  fileName: string,
  fileContent: string,
): Promise<z.infer<typeof zMilestone>> {
  const content = fileContent.replace(/<!--.*?-->/gs, "").trim()

  const markdown = parseMarkdown(content)

  if (markdown.frontMatter === null) {
    throw new Error("Front matter not found")
  }

  const data = zMilestoneFrontMatter.parse(markdown.frontMatter)

  const id = fileName.replace(/\.md$/, "")

  return zMilestone.parse({
    id,
    title: data.title,
    description: data.description,
  } as const satisfies z.infer<typeof zMilestone>)
}
