export interface IUpdatesMetrics {
  negative_accounts: {
    priorValue: string | number | null;
    currentValue: string | number | null;
    delta: "no_change" | "change";
  };
  credit_mix: {
    priorValue: string | number | null;
    currentValue: string | number | null;
    delta: "no_change" | "change";
  };
  credit_utilization: {
    priorValue: string | number | null;
    currentValue: string | number | null;
    delta: "no_change" | "change";
  };
}
