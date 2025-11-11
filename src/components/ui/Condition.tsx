type ConditionProps<T> = {
  value: T;
  then: React.ReactNode;
  else?: React.ReactNode;
};

export const Condition = <T,>({ value, then, else: otherwise }: ConditionProps<T>) =>
  value ? then : otherwise ?? null;
