import { Request } from "express";

export class Connection {
  private _address: string;
  private _timestamp: number;
  private _ttl!: number;
  constructor(req: Request) {
    this._address = req.ip;
    this._timestamp = new Date().getTime();
  }
  public set ttl(ttl: number) {
    if (this._ttl === undefined) {
      this._ttl = ttl;
    }
  }
  public get ttl(): number {
    return this._ttl || -1;
  }
  public get address(): string {
    return this._address;
  }
  public get timestamp(): number {
    return this._timestamp;
  }
  public get valid(): boolean {
    if (this.ttl < 1) {
      return true;
    }
    const now: Date = new Date();
    const expires: number = this.ttl + this.timestamp;
    if (now.getTime() > expires) {
      return false;
    }
    return true;
  }
}
