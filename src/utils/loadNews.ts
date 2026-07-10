import type { NewsItem } from "../types/news";
import { parseFrontmatter } from "./parseFrontmatter";

export async function loadNews(): Promise<NewsItem[]> {
  const files = import.meta.glob(
    "/src/content/news/*.md",
    { as: "raw" }
  );

  const news: NewsItem[] = [];

  for (const path in files) {
    const raw = await files[path]();
    const { data, body } = parseFrontmatter(raw);

    news.push({
      date: data.date,
      body,
    });
  }

  // Latest first
  return news.sort(
    (a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
