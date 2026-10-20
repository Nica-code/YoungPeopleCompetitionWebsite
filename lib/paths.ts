// Both server and browser builds need the same hosting base after hydration.
export const assetBase = process.env.NEXT_PUBLIC_ASSET_BASE ?? "";
export const applicationPdf = `${assetBase}/2027-young-peoples-competition-application.pdf`;
