# Next Prisma Seed Example

An example of how to seed your DB when using Prisma and Next.js

> This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Database

- Setup the DB, `cp .env.example .env` and update values as you see fit. Tih project uses SQLite for ease of use.
- Create the DB with `yarn prisma db push`, this will create a SQLite DB in the directory specified by the .env file.
- Run `yarn db:seed` to seed the coffee data

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.
