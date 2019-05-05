import { CONNECTION_LIST_OPTIONS_DEFAULTS } from "../constants";
import { Connection } from "./connection";
import { ConnectionListOptions } from "./connection-list-options";

export class ConnectionList {
  private _options: ConnectionListOptions;
  private _connections: Connection[] = [];
  constructor(options?: ConnectionListOptions) {
    this._options = this.getOptions(options);
    this.initScheduler();
  }
  public push(connection: Connection) {
    connection.ttl = this._options.connection_ttl as number;
    this._connections.push(connection);
  }
  public allowed(connection: Connection): boolean {
    const same_client_connections = this._connections.filter((c: Connection) =>
      c.address === connection.address,
    );
    return same_client_connections.length <= (this._options.connection_limit as number);
  }
  private getOptions(options?: ConnectionListOptions): ConnectionListOptions {
    return Object.assign({}, CONNECTION_LIST_OPTIONS_DEFAULTS, options);
  }
  private initScheduler(): void {
    setInterval(
      this.clean.bind(this),
      this._options.cleanup_schedule_interval as number,
    );
  }
  private clean(): void {
    let index: number = 0;
    const connection_entries: Array<[number, Connection]> = Array.from(this._connections.entries());
    for (const [i, connection] of connection_entries) {
      if (connection.valid) {
        break;
      }
      index = i + 1;
    }
    this._connections = this._connections.slice(index);
  }
}
