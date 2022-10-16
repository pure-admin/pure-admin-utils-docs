export type FunctionArgs<Args extends any[] = any[], Return = void> = (
  ...args: Args
) => Return;
