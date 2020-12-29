import Head from "next/head";
import Link from "next/link";

const About = () => {
  return (
    <div className="About">
      <Head>
        <title>About | しのはら保育園</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>すえ保育園</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </div>
  );
};

export default About;
