import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/androidIcon32px.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/androidIcon16px.png" />
          <meta name="author" content="HouseDesigns" />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-XDBB1JXH18"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XDBB1JXH18');
            `}
          </Script>
        </Head>
        <body>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <Main />
          <NextScript />
          <Script id="prevent-right-click" strategy="afterInteractive">
            {`
              // prevent Right Click
              document.addEventListener('contextmenu', function(e) {
                e.preventDefault();
              });
            `}
          </Script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
