import prisma from "../lib/prisma";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ coffeeList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js + Prisma seed example</title>
        <meta
          name="description"
          content="A Next.js app showing how to seed a db using prisma"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Next.js + Prisma seed example</h1>
        <p>
          Below is the data we seeded, take a look at{" "}
          <strong>/prisma/seed.ts</strong> to see how we seeded the data.
        </p>
        <ul className={styles.coffeeList}>
          {coffeeList.map((coffee) => (
            <li key={coffee.id}>{coffee.name}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const coffeeList = await prisma.coffee.findMany();
  return { props: { coffeeList } };
};
