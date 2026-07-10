import YAML from "yaml";

export function parseFrontmatter(raw: string) {
  const match = raw.match(/^---([\s\S]*?)---([\s\S]*)$/);
  if (!match) throw new Error("Invalid markdown");

  const data = YAML.parse(match[1]);
  const body = match[2].trim();

  return { data, body };
}
