import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    const setInitialTheme = `
      (function() {
        try {
          var t = localStorage.getItem('theme');
          if (t === 'dark') {
            document.documentElement.classList.add('dark');
          } else if (t === 'light') {
            document.documentElement.classList.remove('dark');
          } else {
            // no saved preference -> use system pref
            var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (prefersDark) document.documentElement.classList.add('dark');
          }
        } catch (e) { /* ignore */ }
      })();
    `;
    return (
      <Html lang="en">
        <Head />
        <body>
          {/* Inject script early so theme class is set before React loads */}
          <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
