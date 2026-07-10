// src/components/Footer.tsx
import { useEffect, useState } from "react";
import { loadSiteSettings } from "../utils/loadSiteSettings";

export default function Footer() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastModified, setLastModified] = useState("");

  useEffect(() => {
    loadSiteSettings().then((settings) => {
      setFirstName(settings.yourFirstName);
      setLastName(settings.yourLastName);
    });

    setLastModified(
      new Date(document.lastModified).toISOString().split("T")[0],
    );
  }, []);

  return (
    <footer>
      <div className="container obj-width">
        <div>
          © 2026 {firstName} {lastName}. All rights reserved.
          <br />
          Last modified: {lastModified}
        </div>
        <div>
          Developed by{" "}
          <a
            href="https://github.com/fahimulkabir"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-900"
          >
            Md Fahimul Kabir
          </a>
        </div>
      </div>
    </footer>
  );
}
