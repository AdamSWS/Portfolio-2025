import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old pages that were removed; keep their URLs working.
      { source: "/downloads", destination: "/downloads/adam_shaar_softres.pdf", permanent: true },
      { source: "/blog", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
