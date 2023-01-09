// this is the landing page of my website

import type { LinksFunction } from "@remix-run/react/dist/routeModules";
import { Button, buttonLink } from "~/component";

export const links: LinksFunction = () => [...buttonLink()];

const LabFreelance = () => {
  return (
    <div>
      <h1>Lab for Freelance</h1>
      <Button>Hi, I should be Clickable</Button>
      <p>
        Anyone with an experiment, issue or something to share, can work on this
        project.
      </p>
    </div>
  );
};

export default LabFreelance;
