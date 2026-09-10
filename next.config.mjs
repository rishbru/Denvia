const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const isUserSite = repoName.endsWith('.github.io')
const basePath =
  process.env.GITHUB_ACTIONS && repoName && !isUserSite ? `/${repoName}` : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
