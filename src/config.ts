import type { Config } from "./type";

import { c } from "./utils";

// ? '\n' are important for the formatting of the output, so don't remove them. - @Ruhannn
const config: Config = {
  name: "Kaito",
  bio: "Developer and Gaming enthusiast who loves tackling challenges",
  about: `A Junior ${c.bold.magenta("Full-Stack Developer")} based in Dhaka, Bangladesh. Over the past year I've been building web applications through personal projects and self-directed learning, working across both the front end and the back end.\n`,
  extra: {
    github: { label: "@nekokaito", url: "https://github.com/nekokaito" },
    email: { label: "siddiqsazzad001@gmail.com", url: "siddiqsazzad001@gmail.com" },
    website: { label: "nekokaito.me", url: "https://siddiqsazzad.thekami.tech/" },

  },
  skills: ["C", "TypeScript", "Python", "Next.js", "Node.js", "MongoDB", "Docker", "Git", "Linux"],
};

export default config;
