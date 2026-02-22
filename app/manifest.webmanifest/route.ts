import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(
    {
      name: "Bababaisnath Steels",
      short_name: "BBS Steel",
      start_url: "/",
      display: "standalone",
      background_color: "#080808",
      theme_color: "#080808",
      description: "Premium industrial steel distributor in Kanpur.",
      icons: [{ src: "/icon-192.svg", sizes: "192x192", type: "image/svg+xml" }]
    },
    { headers: { "Content-Type": "application/manifest+json" } }
  );
}
