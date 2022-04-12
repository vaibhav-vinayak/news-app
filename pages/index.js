import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          News Headlines, Latest News Updates, Today Headlines, Top Stories,
          Breaking News | Nayi Taaza
        </title>
        <meta
          name="description"
          content="News Headlines, Latest News Updates, Today Headlines, Top Stories, Breaking News | Nayi Taaza"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="text-center">
          <h1 className="font-bold text-2xl">Nayi Taaza</h1>
          <p>Stay in touch with what&#39;s happening around</p>
        </div>
      </main>
    </div>
  );
}
