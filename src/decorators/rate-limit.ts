import { HttpController } from "@yellow-snow/http";

export function RateLimit() {
    // tslint:disable-next-line:variable-name
    return (_target: HttpController, _key: string, descriptor: PropertyDescriptor) => {
        const method = descriptor.value;
        descriptor.value = async function(...args: any[]) {
            try {
                await method.apply(this, args);
            } catch (e) {
                //
            } finally {
                //
            }
        };
    };
}
