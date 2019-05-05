import { HttpController } from "@yellow-snow/http";
import { Request, Response } from "express";
import { Injector } from "tsnode-di";
import { RateLimitService } from "../services/rate-limit-service";

export function RateLimit() {
  const rate_limit_service = Injector.resolve<RateLimitService>(RateLimitService);
  return (_target: HttpController, _key: string, descriptor: PropertyDescriptor) => {
    const method = descriptor.value;
    descriptor.value = async function(...args: any[]) {
      try {
        const ctrl: HttpController = this as HttpController;
        // tslint:disable-next-line:no-string-literal
        const req: Request = ctrl["req"];
        // tslint:disable-next-line:no-string-literal
        const res: Response = ctrl["res"];
        if (!rate_limit_service.canActivate(req)) {
          res.sendStatus(429);
          return;
        }
        await method.apply(this, args);
      } catch (e) {
        //
      } finally {
        //
      }
    };
  };
}
