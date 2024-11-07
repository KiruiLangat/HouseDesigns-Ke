import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="%PUBLIC_URL%/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="%PUBLIC_URL%/androidIcon32px.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="%PUBLIC_URL%/androidIcon16px.png" />
          <meta name="author" content="House Designs" />
          <link rel="canonical" href="https://housedesigns.com/" />
        </Head>
        <body>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // prevent Right Click
                document.addEventListener('contextmenu', function(e) {
                  e.preventDefault();
                });
              `,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
