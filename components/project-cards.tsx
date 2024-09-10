import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8 ">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Portfolio",
    description:
      "I developed this website using Next and Tailwind CSS, incorporating components from ShadCN and Accertinity UI",
    link: "https://github.com/koshambiB/portfolio-website",
  },
  {
    title: "FirstCheque",
    description:
      "A freelancing platform featuring an AI-driven recommendation system, that I am devloping in collaboration with my teammates",
    link: "https://github.com/schnell-sih/firstcheque",
  },

  /*
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },*/
];
