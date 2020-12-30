import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

const Documents = () => {
  return (
    <Layout>
      <Head>
        <title>申請書類 | しのはら保育園</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>申請書類</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nesciunt
        modi placeat quam corrupti architecto eveniet, ab impedit perspiciatis
        neque aut sequi, veritatis accusantium. Voluptas, non? Soluta dicta
        culpa nam! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Debitis necessitatibus quaerat aliquid iusto ipsum porro tempora ipsa
        minima fuga accusamus odit cupiditate mollitia quidem maxime ipsam at
        aut, minus eveniet?Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Cumque magnam rerum debitis veritatis, in consequuntur eveniet
        corporis. Repudiandae nam iusto ipsam nulla, quod voluptates ut omnis
        quasi deserunt doloribus dicta?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. At laudantium, et aut corrupti illo quo sint. Ad
        repellat debitis aut veritatis beatae rerum perspiciatis velit? Corrupti
        dolores id illum soluta!
      </p>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
};

export default Documents;
