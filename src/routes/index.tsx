import { createFileRoute } from "@tanstack/react-router";
import App from "@/App.jsx";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Awah Michael — Customer Support Specialist" },
      { name: "description", content: "Portfolio of Awah Michael — Customer Support Specialist, CRM expert, and CX transformation lead." },
      { property: "og:title", content: "Awah Michael — Customer Support Specialist" },
      { property: "og:description", content: "Portfolio of Awah Michael — Customer Support Specialist, CRM expert, and CX transformation lead." },
    ],
  }),
  component: App,
});
