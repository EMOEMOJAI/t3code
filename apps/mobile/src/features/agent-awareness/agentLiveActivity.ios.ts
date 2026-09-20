import AgentActivity, { type AgentActivityProps } from "../../widgets/AgentActivity";

/** Dismisses ended T3 cards still visible on the Lock Screen, preserving active and stale cards. */
export function dismissEndedAgentLiveActivities(): Promise<void> {
  return AgentActivity.dismissEndedInstances();
}

export function getAgentLiveActivities() {
  return AgentActivity.getInstances();
}

export function startAgentLiveActivity(props: AgentActivityProps) {
  return AgentActivity.start(props);
}
