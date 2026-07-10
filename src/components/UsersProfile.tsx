import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import type { User } from "../types/user";
import { loadUser } from "../utils/loadUser";

import {
  FaGoogleScholar,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa6";
import { SiOrcid } from "react-icons/si";
import { getAssetUrl } from "../utils/getAssetUrl";

export default function UsersProfile() {
  const [prof, setProf] = useState<User | null>(null);

  useEffect(() => {
    loadUser().then(setProf);
  }, []);

  if (!prof) return null;

  const { links } = prof;

  return (
    <section className="user-profile">
      {/* Left */}
      <div className="user-image">
        {prof.image && <img src={getAssetUrl(prof.image)} alt={prof.name} />}
      </div>

      {/* Right */}
      <div className="user-info">
        <h2>{prof.name}</h2>
        <ReactMarkdown
          components={{
            p: ({ node, ...props }) => (
              <p style={{ marginBottom: "1rem", lineHeight: "1.6" }} {...props} />
            ),
          }}
        >
          {prof.body}
        </ReactMarkdown>

        <div id="show-more">
          {prof.cv && (
            <a
              className="cv-button"
              href={getAssetUrl(prof.cv)}
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          )}
        </div>

        <div className="social-links">
          {links?.github && (
            <a href={links.github} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          )}
          {links?.googleScholar && (
            <a href={links.googleScholar} target="_blank" rel="noreferrer">
              <FaGoogleScholar />
            </a>
          )}
          {links?.orcid && (
            <a href={links.orcid} target="_blank" rel="noreferrer">
              <SiOrcid />
            </a>
          )}
          {links?.linkedin && (
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          )}
          {links?.email && (
            <a href={links.email}>
              <FaEnvelope />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
