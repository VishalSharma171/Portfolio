// src/pages/_document.jsx
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    const setInitialTheme = `
      (function() {
        try {
          var saved = localStorage.getItem('theme');
          if (saved === 'light') {
            // user explicitly chose light before, keep light
            document.documentElement.classList.remove('dark');
          } else if (saved === 'dark') {
            // user explicitly chose dark before
            document.documentElement.classList.add('dark');
          } else {
            // NO saved preference -> default to DARK
            document.documentElement.classList.add('dark');
          }
        } catch (e) { /* ignore */ }
      })();
    `;
    return (
      <Html lang="en">
        <Head />
        <body>
          <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
