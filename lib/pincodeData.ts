export const SERVICEABLE_PINCODES = Array.from({ length: 27 }, (_, i) => `208${String(i + 1).padStart(3, "0")}`);

export const isServiceablePincode = (pin: string) => SERVICEABLE_PINCODES.includes(pin);

