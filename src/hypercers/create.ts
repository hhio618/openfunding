import {
    formatHypercertData,
    TransferRestrictions,
  } from "@hypercerts-org/sdk";
  
  // Validate and format your Hypercert metadata
  const { data: metadata, valid, errors } = formatHypercertData({
    name,
    ...
  })
  
  // Check on errors
  if (!valid) {
    return console.error(errors);
  }
  
  // Set the total amount of units available
  const totalUnits: BigNumberish = 10_000_000
  
  // Define the transfer restriction
  const transferRestrictions: TransferRestrictions = TransferRestrictions.FromCreatorOnly
  
  // Mint your Hypercert!
  const tx = await client.mintClaim(
    metadata,
    totalUnits,
    transferRestrictions,
  );