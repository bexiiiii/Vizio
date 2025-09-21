import React from "react";
import { AwardBadge } from "@/components/ui/award-badge";

const demoLink = "https://www.producthunt.com/golden-kitty-awards/hall-of-fame?year=2024#bootstrapped-small-teams-2";

export const AIBadgeComponent = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <AwardBadge type="golden-kitty" link={demoLink} />
    </div>
  );
};

