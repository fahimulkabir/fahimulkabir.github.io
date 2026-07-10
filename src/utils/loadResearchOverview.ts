import type { ResearchOverview } from "../types/research";
import { parseFrontmatter } from "./parseFrontmatter";

export async function loadResearchOverview(): Promise<ResearchOverview> {
  const files = import.meta.glob(
    "/src/content/research/overview.md",
    { as: "raw" }
  );

  const raw = await files["/src/content/research/overview.md"]();
  const { data, body } = parseFrontmatter(raw);

  return {
    images: data.images ?? [],
    body,
  };
}
