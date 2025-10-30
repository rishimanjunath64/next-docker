This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



Repository overview
next-docker
This is a Dockerized Next.js project.

Run locally

docker run -p 3000:3000 rishimanjunath/next-docker

1️⃣ Pull the image

Run this command on any machine that has Docker installed:

docker pull rishimanjunath/next-docker:latest


docker pull → downloads the image from Docker Hub

rishimanjunath/next-docker:latest → your repository name and tag

After it finishes, the image will be stored locally on that machine.

2️⃣ Run a container from the image

Once pulled, you can run it like this:

docker run -p 3000:3000 rishimanjunath/next-docker:latest


-p 3000:3000 → maps port 3000 inside the container to port 3000 on your machine

Your Next.js app will now be accessible at http://localhost:3000

3️⃣ Optional: Run with Docker Compose

If you have the same docker-compose.yaml file on the new machine, just run:

docker compose up


Docker will automatically pull the image if it doesn’t exist locally.

⚡ Summary

docker pull → get image from Docker Hub

docker run → start a container from that image

docker compose up → start containers if you have a compose file

