import { ConnectionListOptions } from "../models/connection-list-options";

export const CONNECTION_LIST_OPTIONS_DEFAULTS: ConnectionListOptions = {
    cleanup_schedule_interval: 100,
    connection_limit: 20,
    connection_ttl: 5000,
};
