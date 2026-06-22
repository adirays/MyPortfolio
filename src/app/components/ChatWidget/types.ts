export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  durationMs?: number;
}

export type WidgetState = "closed" | "open";
