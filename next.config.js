/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async () => {
      
      return [
        {
          source: '/api/:path*',
          destination:
            process.env.NODE_ENV === 'development'
              ? 'http://localhost:8000/:path*'
              : process.env.API_URL || 'http://flask-api-service-alb-1409833725.us-west-2.elb.amazonaws.com/:path*',  // Removed the '/api' prefix to match development
        },
      ]
    },
  }
  
  module.exports = nextConfig
