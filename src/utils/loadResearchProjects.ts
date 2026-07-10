import type { ResearchProject } from "../types/research";
import { parseFrontmatter } from "./parseFrontmatter";

export async function loadResearchProjects(): Promise<ResearchProject[]> {
  const files = import.meta.glob(
    "/src/content/research/projects/*.md",
    { as: "raw" }
  );

  const projects: ResearchProject[] = [];

  for (const path in files) {
    const raw = await files[path]();
    const { data, body } = parseFrontmatter(raw);

    projects.push({
      title: data.title,
      image: data.image,
      links: data.links,
      body,
    });
  }

  return projects;
}
