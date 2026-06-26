export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: "workflow" | "pipeline" | "brain" | "lightning" | "shield" | "plug";
  gridArea: string;
  size: "large" | "medium" | "small";
}

export const FEATURES: Feature[] = [
  {
    id: "workflow",
    icon: "workflow",
    title: "Visual Workflow Builder",
    description:
      "Drag-and-drop canvas to compose multi-step automations without a single line of code. Connect APIs, triggers, and AI models in minutes.",
    gridArea: "workflow",
    size: "large",
  },
  {
    id: "pipeline",
    icon: "pipeline",
    title: "Data Pipeline Orchestration",
    description:
      "ETL at AI scale. Ingest, transform, and route structured and unstructured data across your entire stack with sub-second latency.",
    gridArea: "pipeline",
    size: "medium",
  },
  {
    id: "brain",
    icon: "brain",
    title: "Adaptive AI Engine",
    description:
      "Fine-tune foundation models on your private data. Vectra learns your domain and improves every run — no ML expertise required.",
    gridArea: "brain",
    size: "medium",
  },
  {
    id: "lightning",
    icon: "lightning",
    title: "Real-Time Execution",
    description:
      "Sub-100ms trigger-to-action latency. Event-driven architecture ensures your workflows fire the instant conditions are met.",
    gridArea: "lightning",
    size: "small",
  },
  {
    id: "shield",
    icon: "shield",
    title: "Enterprise Security",
    description:
      "SOC 2 Type II, GDPR-compliant, end-to-end encryption. Your data never leaves your chosen region.",
    gridArea: "shield",
    size: "small",
  },
  {
    id: "plug",
    icon: "plug",
    title: "1,000+ Integrations",
    description:
      "Native connectors for Slack, Salesforce, Postgres, S3, Notion, GitHub, and hundreds more. Ship your first integration in under 5 minutes.",
    gridArea: "plug",
    size: "medium",
  },
];
