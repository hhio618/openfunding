import { useHypercertClient } from "./client";
import { useQuery } from "@tanstack/react-query";

export const useFractionsByOwner = (owner: string) => {
  const {
    client: { indexer },
  } = useHypercertClient();

  return useQuery(
    ["hypercerts", "fractions", "owner", owner],
    () => indexer.fractionsByOwner(owner),
    { enabled: !!owner, refetchInterval: 5000 },
  );
};