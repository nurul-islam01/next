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
        content="As a dedicated Full-Stack Web Developer, I, Nurul Islam, specialize in building dynamic and scalable web applications using cutting-edge technologies such as React, Angular, Express, SQL, MongoDB, and Firebase. With a passion for crafting seamless user experiences and a keen eye for detail, I bring your digital ideas to life. My expertise extends from creating responsive and mobile-friendly interfaces to implementing robust server-side logic. Whether you need a powerful e-commerce platform, a feature-rich web application, or a custom mobile app, I thrive on delivering solutions that not only meet but exceed your expectations. I am committed to staying ahead of industry trends, ensuring your project benefits from the latest advancements in web development. Let's collaborate to transform your vision into a functional and visually stunning reality. Explore my portfolio and discover the potential of innovative web solutions tailored to your unique needs."
        name="description"
      />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content="@nurulislam.dev" name="twitter:site" />
      <meta
        content="Nurul Islam - Full-Stack Developer | React, Next Angular, Express, SQL, MongoDB, Firebase"
        name="twitter:title"
      />

      <meta
        content="As a dedicated Full-Stack Web Developer, I, Nurul Islam, specialize in building dynamic and scalable web applications using cutting-edge technologies such as React, Angular, Express, SQL, MongoDB, and Firebase. With a passion for crafting seamless user experiences and a keen eye for detail, I bring your digital ideas to life. My expertise extends from creating responsive and mobile-friendly interfaces to implementing robust server-side logic. Whether you need a powerful e-commerce platform, a feature-rich web application, or a custom mobile app, I thrive on delivering solutions that not only meet but exceed your expectations. I am committed to staying ahead of industry trends, ensuring your project benefits from the latest advancements in web development. Let's collaborate to transform your vision into a functional and visually stunning reality. Explore my portfolio and discover the potential of innovative web solutions tailored to your unique needs."
        name="twitter:description"
      />
      <meta
        content="https://nurulislam.dev/img/meta-images/twitter.jpeg"
        name="twitter:image"
      />

      <meta content="website" property="og:type" />
      <meta content="https://nurulislam.dev" property="og:url" />
      <meta
        content="Nurul Islam - Full-Stack Developer | React, Next Angular, Express, SQL, MongoDB, Firebase"
        property="og:title"
      />
      <meta
        content="As a dedicated Full-Stack Web Developer, I, Nurul Islam, specialize in building dynamic and scalable web applications using cutting-edge technologies such as React, Angular, Express, SQL, MongoDB, and Firebase. With a passion for crafting seamless user experiences and a keen eye for detail, I bring your digital ideas to life. My expertise extends from creating responsive and mobile-friendly interfaces to implementing robust server-side logic. Whether you need a powerful e-commerce platform, a feature-rich web application, or a custom mobile app, I thrive on delivering solutions that not only meet but exceed your expectations. I am committed to staying ahead of industry trends, ensuring your project benefits from the latest advancements in web development. Let's collaborate to transform your vision into a functional and visually stunning reality. Explore my portfolio and discover the potential of innovative web solutions tailored to your unique needs."
        property="og:description"
      />
      <meta
        content="https://nurulislam.dev/img/meta-images/facebook.jpeg"
        property="og:image"
      />

      <meta
        content="Nurul Islam - Full-Stack Developer | React, Next, Angular, Express, SQL, MongoDB, Firebase"
        itemProp="name"
      />
      <meta
        content="As a dedicated Full-Stack Web Developer, I, Nurul Islam, specialize in building dynamic and scalable web applications using cutting-edge technologies such as React, Angular, Express, SQL, MongoDB, and Firebase. With a passion for crafting seamless user experiences and a keen eye for detail, I bring your digital ideas to life. My expertise extends from creating responsive and mobile-friendly interfaces to implementing robust server-side logic. Whether you need a powerful e-commerce platform, a feature-rich web application, or a custom mobile app, I thrive on delivering solutions that not only meet but exceed your expectations. I am committed to staying ahead of industry trends, ensuring your project benefits from the latest advancements in web development. Let's collaborate to transform your vision into a functional and visually stunning reality. Explore my portfolio and discover the potential of innovative web solutions tailored to your unique needs."
        itemProp="description"
      />
      <meta
        content="https://nurulislam.dev/img/meta-images/google.jpeg"
        itemProp="image"
      />

      <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
      <link rel="manifest" href="/manifest.json" />
    </Head>
  );
};

export default Title;
