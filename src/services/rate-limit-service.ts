import { Request } from "express";
import { Connection, ConnectionList } from "../models";

export class RateLimitService {
  private connections: ConnectionList;
  constructor() {
    this.connections = new ConnectionList();
  }
  public canActivate(req: Request): boolean {
    const connection = new Connection(req);
    this.connections.push(connection);
    return this.connections.allowed(connection);
  }
}
