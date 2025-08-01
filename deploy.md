# Vercel Deployment Guide

## Manual Environment Variable Setup

Since the CLI is having issues with the JWT secret, please set it manually in the Vercel dashboard:

1. Go to your Vercel dashboard
2. Select your project: `javascript-learning-platform`
3. Go to Settings > Environment Variables
4. Add a new environment variable:
   - **Name:** `JWT_SECRET`
   - **Value:** `eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTc1NDA2NDQ4MSwiaWF0IjoxNzU0MDY0NDgxfQ.2FkbaZSPqTnoDM1_f089frwZU8y7L2VI4Y2_L-YrgW4`
   - **Environment:** Production, Preview, Development

## Then deploy with:
```bash
vercel --prod
``` 