import Link from "next/link";
import Image from "next/Image";
import Head from "next/head";
import Script from "next/script";

const DogFace = () => (
  <Image
    src="/public/images/DogFace.jpg"
    height={144}
    width={144}
    alt="Portrait of a dog named Luna."
  />
);
export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post!!!!</title>
      </Head>

      <h1>First Post</h1>

      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
