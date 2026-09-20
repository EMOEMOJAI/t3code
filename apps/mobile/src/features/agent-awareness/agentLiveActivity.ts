import type { LiveActivity } from "expo-widgets";
import type { AgentActivityProps } from "../../widgets/AgentActivity";

/** Resolves without native work on platforms that do not support iOS Live Activities. */
export function dismissEndedAgentLiveActivities(): Promise<void> {
  return Promise.resolve();
}

export function getAgentLiveActivities(): Array<LiveActivity<AgentActivityProps>> {
  return [];
}

export function startAgentLiveActivity(
  _props: AgentActivityProps,
): LiveActivity<AgentActivityProps> | null {
  return null;
}
