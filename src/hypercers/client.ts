import { ethers } from "ethers";
import { useQuery } from "@tanstack/react-query";
import {
  HypercertClient
} from "@hypercerts-org/sdk";


export const useFractionsByOwner = () => {
  // NOTE: you should replace this with your own JSON-RPC provider to the network
  // This should have signing abilities and match the `chainId` passed into HypercertClient
  const operator = ethers.providers.getDefaultProvider("goerli");

  return useQuery(
    ["hypercerts", "newClient"],
    () => new HypercertClient({
      chainId: 5, // goerli testnet
      operator,
      nftStorageToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEJEOGYzMWMyOERlQzY2MmVhMzQ0N2FENzhEMUQ5MmNkRGQ3ODYxQWEiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY5MzI4NzcxNzE4MywibmFtZSI6Imh5cGVyY2VydHMifQ.RB1ytGHkQVwBBqdn7i9xB7nUMAm_sD3RvxUUbuBJDVE",
      web3StorageToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDM0M2FjMTM4MkIxOWY1Qjk2NEUwRjYxZDNCMmU5MGE4NjUyQzg0RTIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTMyODc3NDk0MTcsIm5hbWUiOiJoeXBlcmNlcnRzIn0._BBYzOOat7ERsun1hifRtMxegfrl1P9o5P6VOeLuVr4",
    }),
    { enabled: true, refetchInterval: 5000 },
  );
};
