# Fortune Cookie Frontend

A Next.js application for getting personalized fortune cookie wisdom based on user input. This application connects to a Python Flask backend that uses AWS Bedrock FM model to generate wisdom.

## Overview

This project is part of a demonstration on building repository-agnostic CI/CD pipelines using AWS Amplify and AWS CodeBuild. The frontend is built with:

- Next.js
- React
- Tailwind CSS

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Environment Variables

In development, create a `.env.local` file with:

```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

In production, set this environment variable in your AWS Amplify console.

## CI/CD with AWS Amplify

This project is configured to deploy automatically with AWS Amplify. To set up the CI/CD pipeline:

1. Push this repository to GitHub
2. Connect your GitHub repository to AWS Amplify
3. Amplify will automatically detect the `amplify.yml` configuration file
4. Add the `NEXT_PUBLIC_API_URL` environment variable pointing to your deployed backend API

### AWS Amplify Setup Steps

1. Go to AWS Amplify Console
2. Click "New app" > "Host web app"
3. Select GitHub as the repository provider
4. Authenticate and select your repository
5. Configure build settings (the defaults should work with our `amplify.yml`)
6. Add environment variables:
   - NEXT_PUBLIC_API_URL: [Your backend API URL]
7. Click "Save and deploy"

## Related Repositories

- [Fortune Cookie Backend](https://github.com/yourusername/fortune_cookie_backend) - The Flask backend for this application