import React, { useEffect } from 'react';
import Head from 'next/head';
import { tagManager } from '@/utils/tagmanager';

const Title = () => {
  useEffect(() => {
    tagManager('G-RW7YS6YY4Q');
  }, []);

  return (
    <Head>
      <title>Expert Full Stack Engineer: Web Development Mastery</title>
      <link href="https://nurulislam.dev" rel="canonical" />
      <meta content="index, follow" name="robots" />
      <meta
        name="description"
        content="Experienced Full-Stack Developer, Nurul Islam, excels in React, Next.js, Express, Frontend and backend caching expert. Passionate about seamless user experiences and dynamic web apps. Let's bring your vision to life with innovative, tailored solutions. Explore my portfolio for stunning examples."
      />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content="@nurulislam.dev" name="twitter:site" />
      <meta
        name="twitter:title"
        content="Nurul Islam - Full-Stack Developer | React, Next Angular, Express, SQL, MongoDB, Firebase"
      />

      <meta
        name="twitter:description"
        content="Experienced Full-Stack Developer, Nurul Islam, excels in React, Next.js, Express, Frontend and backend caching expert. Passionate about seamless user experiences and dynamic web apps. Let's bring your vision to life with innovative, tailored solutions. Explore my portfolio for stunning examples."
      />
      <meta
        name="twitter:image"
        content="https://nurulislam.dev/img/meta-images/twitter.jpeg"
      />

      <meta content="website" property="og:type" />
      <meta content="https://nurulislam.dev" property="og:url" />
      <meta
        property="og:title"
        content="Nurul Islam - Full-Stack Developer | React, Next Angular, Express, SQL, MongoDB, Firebase"
      />
      <meta
        property="og:description"
        content="Experienced Full-Stack Developer, Nurul Islam, excels in React, Next.js, Express, Frontend and backend caching expert. Passionate about seamless user experiences and dynamic web apps. Let's bring your vision to life with innovative, tailored solutions. Explore my portfolio for stunning examples."
      />
      <meta
        property="og:image"
        content="https://nurulislam.dev/img/meta-images/facebook.jpeg"
      />

      <meta
        content="Nurul Islam - Full-Stack Developer | React, Next, Angular, Express, SQL, MongoDB, Firebase"
        itemProp="name"
      />
      <meta
        itemProp="description"
        content="Experienced Full-Stack Developer, Nurul Islam, excels in React, Next.js, Express, Frontend and backend caching expert. Passionate about seamless user experiences and dynamic web apps. Let's bring your vision to life with innovative, tailored solutions. Explore my portfolio for stunning examples."
      />
      <meta
        itemProp="image"
        content="https://nurulislam.dev/img/meta-images/google.jpeg"
      />

      <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
      <link rel="manifest" href="/manifest.json" />
    </Head>
  );
};

export default Title;
