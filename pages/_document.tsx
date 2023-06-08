import type { DocumentContext, DocumentInitialProps } from 'next/document';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const cache = createCache();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          (
            <StyleProvider cache={cache}>
              <App {...props} />
            </StyleProvider>
          ),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <script
            dangerouslySetInnerHTML={{
              __html: `</script>${extractStyle(cache)}<script>`,
            }}
          />
        </>
      ),
    };
  }
  render() {
    return (
      <Html>
        <Head />
        <body id="app">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
