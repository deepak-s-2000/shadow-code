import crypto from "crypto";

import { ChatMessage } from "../index.js";

export function deriveSessionId(messages: ChatMessage[]): string {
  const first = messages[0];
  const content =
    typeof first?.content === "string"
      ? first.content
      : JSON.stringify(first?.content ?? "");
  return crypto.createHash("sha256").update(content).digest("hex").slice(0, 32);
}
