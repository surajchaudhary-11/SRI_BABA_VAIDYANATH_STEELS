export const trackingData: Record<string, { step: number; note: string; eta: string }> = {
  "BBS-2024-001": { step: 5, note: "Material loaded and vehicle dispatched from Kanpur yard.", eta: "Tomorrow" },
  "BBS-2024-002": { step: 3, note: "Order confirmed. Material being arranged.", eta: "Within 3 working days" }
};

export const trackingSteps = [
  "Inquiry Received",
  "Quote Sent",
  "Order Confirmed",
  "Material Ready",
  "Dispatched",
  "Delivered"
];

