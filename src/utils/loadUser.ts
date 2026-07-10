import type { User } from "../types/user";
import { parseFrontmatter } from "./parseFrontmatter";

export async function loadUser(): Promise<User> {
  const files = import.meta.glob("/src/content/user/profile.md", {
    as: "raw",
  });

  const raw = await files["/src/content/user/profile.md"]();
  const { data, body } = parseFrontmatter(raw);

  return {
    name: data.name,
    image: data.image,
    cv: data.cv,
    body,
    links: {
      googleScholar: data.googleScholar,
      orcid: data.orcid,
      linkedin: data.linkedin,
      github: data.github,
      email: data.email,
    },
  };
}
