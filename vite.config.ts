import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  let basePath = "/";

  // Check if we are running on GitHub Actions
  if (process.env.GITHUB_REPOSITORY) {
    const repoName = process.env.GITHUB_REPOSITORY.split("/")[1];

    // If the repo name does NOT end with .github.io, it's a sub-folder project.
    // If it DOES end with .github.io, we leave the basePath as '/'
    if (!repoName.endsWith(".github.io")) {
      basePath = `/${repoName}/`;
    }
  }

  return {
    plugins: [react()],
    // Automatically injects the correct base path (either '/' or '/repo-name/')
    base: basePath,
  };
});
