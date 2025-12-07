/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // X-Frame-Options hiç koymuyoruz (SAMEORIGIN olursa iframe bozulur)
          // { key: 'X-Frame-Options', value: 'SAMEORIGIN' },

          {
            key: 'Content-Security-Policy',
            // withmor.com.tr ve www.withmor.com.tr bu siteyi iframe içinde açabilsin
            value:
              "frame-ancestors 'self' https://withmor.com.tr https://www.withmor.com.tr;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
