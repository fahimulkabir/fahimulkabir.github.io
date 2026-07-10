export type ResearchOverview = {
  images: string[];
  body: string;
};

export type ResearchProject = {
  title: string;
  image: string;
  body: string;
  links?: { label: string; url: string }[];
};
