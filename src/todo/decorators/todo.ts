import { Controller } from "@yellow-snow/core";

export function Todo(message?: string): any {
  return (target: Controller, property_key: keyof Controller) => {
    console.log(`TODO: ${
      target.constructor.name
      }.${
      property_key
      }${
      (target[property_key] as any) instanceof Function ?
        "()" :
        ""
      }${
      message ?
        ` - "${message}"` :
        ""
      }`);
  };
}
