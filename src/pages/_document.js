import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <script
        defer
        src="https://www.googletagmanager.com/gtm.js?id=G-RW7YS6YY4Q"
      ></script>
      <meta
        httpEquiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />
      <meta charSet="UTF-8" />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        name="viewport"
      />
      <meta
        content="Full Stack Developer, Web Wizard: Mastering Frontend and Backend Technologies,Expert Full Stack Engineer,Code Architect: Navigating the Tech Landscape,Versatile Full Stack Programmer,UI/UX Maestro: Crafting Seamless Experiences,Full Stack Web Developer,Digital Solutions Guru: Transformative Development,Senior Full Stack Engineer,Innovation Maestro: Tech Stack Mastery,Pro Full Stack Developer, Application Architect: Building Robust Web Solutions, Full Stack Specialist, End-to-End Developer: Seamless User Journeys,Lead Full Stack Architect, Digital Solution Shaper: Holistic Development Expert,Full Stack Software Engineer,Scalability Maestro: Crafting Responsive Apps,Masterful Full Stack Developer,Code Artisan: UI to Database Brilliance,Full Stack Developer: Bridging Frontend and Backend Technologies, Expert Full Stack Engineer: Web Development Mastery, Versatile Full Stack Programmer: Frontend to Backend Excellence,Full Stack Web Developer: Crafting Seamless User Experiences, Senior Full Stack Engineer: Innovating Across the Tech Stack,Pro Full Stack Developer: Building Robust Web Applications,Full Stack Specialist: End-to-End Web Development Proficiency,Lead Full Stack Architect: Shaping Digital Solutions Holistically, Full Stack Software Engineer: Creating Scalable and Responsive Apps,Masterful Full Stack Developer: Code Crafting from UI to Database, Full Stack Developer, Web Development Maestro,Expert Full Stack Engineer,Seamless UX/UI Specialist,Versatile Full Stack Programmer,Frontend and Backend Guru,Full Stack Web Developer,User-Centric Application Architect,Senior Full Stack Engineer,Tech Stack Innovation Leader,Pro Full Stack Developer,Robust Web App Craftsman,Full Stack Specialist, Holistic Web Development Expert,Lead Full Stack Architect, Digital Solution Visionary,Full Stack Software Engineer,Scalability and Responsiveness Pro,Masterful Full Stack Developer,Code Artisan from UI to Database,"
        name="keywords"
      />
      <link
        href={`${process.env.SITE_URL}/sitemap.xml`}
        rel="sitemap"
        title="Sitemap"
        type="application/xml"
      />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
