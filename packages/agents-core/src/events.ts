import { Agent } from './agent';
import { RunItem } from './items';
import { ResponseStreamEvent } from './types';

/**
 * Streaming event from the LLM. These are `raw` events, i.e. they are directly passed through from
 * the LLM.
 */
export class RunRawModelStreamEvent {
  /**
   * The type of the event.
   */
  public readonly type = 'raw_model_stream_event';

  /**
   * @param data The raw responses stream events from the LLM.
   */
  constructor(public data: ResponseStreamEvent) {}
}

/**
 * The names of the events that can be generated by the agent.
 */
export type RunItemStreamEventName =
  | 'message_output_created'
  | 'handoff_requested'
  | 'handoff_occurred'
  | 'tool_called'
  | 'tool_output'
  | 'reasoning_item_created'
  | 'tool_approval_requested';

/**
 * Streaming events that wrap a `RunItem`. As the agent processes the LLM response, it will generate
 * these events from new messages, tool calls, tool outputs, handoffs, etc.
 */
export class RunItemStreamEvent {
  public readonly type = 'run_item_stream_event';

  /**
   * @param name The name of the event.
   * @param item The item that was created.
   */
  constructor(
    public name: RunItemStreamEventName,
    public item: RunItem,
  ) {}
}

/**
 * Event that notifies that there is a new agent running.
 */
export class RunAgentUpdatedStreamEvent {
  public readonly type = 'agent_updated_stream_event';

  /**
   * @param agent The new agent
   */
  constructor(public agent: Agent<any, any>) {}
}

/**
 * A streaming event from an agent run.
 */
export type RunStreamEvent =
  | RunRawModelStreamEvent
  | RunItemStreamEvent
  | RunAgentUpdatedStreamEvent;
