export type BlogMeta = {
  slug: string;
  number: string;
  category: string;
  title: string;
  excerpt: string;
};

export const blogData: BlogMeta[] = [
  { slug: "tmt-grade-selection", number: "01", category: "TMT", title: "How to Choose TMT Grade for Your House", excerpt: "Understand Fe415, Fe500, Fe500D and Fe550 in practical site conditions." },
  { slug: "hr-vs-cr-sheets", number: "02", category: "Sheets", title: "Difference Between HR and CR Steel Sheets", excerpt: "A procurement-focused comparison for industrial buyers and fabricators." },
  { slug: "price-factors", number: "03", category: "Market", title: "Steel Price Factors in India", excerpt: "Raw material, freight, demand cycles and brand premiums decoded." },
  { slug: "is1786", number: "04", category: "Standards", title: "Understanding IS 1786", excerpt: "What to verify in quality certificates before bulk purchase." },
  { slug: "tmt-testing", number: "05", category: "Quality", title: "How TMT Quality is Verified", excerpt: "Yield strength, elongation and rebend tests explained simply." },
  { slug: "procurement-checklist", number: "06", category: "B2B", title: "Bulk Steel Procurement Checklist", excerpt: "Commercial and technical checkpoints for contractors in UP." }
];

