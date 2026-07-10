export const MEMBER_POSITIONS = [
  "Faculty",
  "Postdoc",
  "PhD",
  "MS",
  "Bachelors",
  "Alumni",
] as const;

export type MemberPosition = (typeof MEMBER_POSITIONS)[number];
