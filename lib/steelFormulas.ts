export type SectionType = "TMT" | "MS_PIPE" | "SHEET" | "PLATE" | "EQUAL_ANGLE";

export const steelFormulas = {
  tmtWeightKgPerPiece: (dMm: number, lengthM: number) => (Math.pow(dMm, 2) / 162) * lengthM,
  msPipeWeightKg: (odMm: number, tMm: number, lengthM: number) => (odMm - tMm) * tMm * 0.02466 * lengthM,
  sheetOrPlateKg: (lengthM: number, widthM: number, thicknessMm: number) => lengthM * widthM * thicknessMm * 7.85,
  equalAngleKg: (bMm: number, tMm: number, lengthM: number) => (2 * bMm - tMm) * tMm * 7.85 * lengthM * 0.01,
  tmtForSlabKg: (lengthM: number, widthM: number, depthM: number) => lengthM * widthM * depthM * 0.8 * 1000,
  costWithGst: (mt: number, rate: number) => {
    const base = mt * rate;
    const gst = base * 0.18;
    return { base, gst, total: base + gst };
  },
  cutAndPiece: (stdLengthM: number, cutLengthM: number) => {
    const pieces = cutLengthM > 0 ? Math.floor(stdLengthM / cutLengthM) : 0;
    const used = pieces * cutLengthM;
    const wastagePercent = stdLengthM > 0 ? ((stdLengthM - used) / stdLengthM) * 100 : 0;
    return { pieces, wastagePercent };
  }
};

export const formatINR = (value: number) =>
  new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(value);

