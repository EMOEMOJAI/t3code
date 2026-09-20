import AgentActivity, { type AgentActivityProps } from "../../widgets/AgentActivity";

export function dismissEndedAgentLiveActivities(): Promise<void> {
  return AgentActivity.dismissEndedInstances();
}

export function getAgentLiveActivities() {
  return AgentActivity.getInstances();
}

export function startAgentLiveActivity(props: AgentActivityProps) {
  return AgentActivity.start(props);
}
