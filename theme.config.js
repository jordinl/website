export default {
  projectLink: 'https://github.com/napi-rs/website', // GitHub link in the navbar
  docsRepositoryBase: 'https://github.com/napi-rs/website/blob/master', // base URL for the docs repository
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © NAPI-RS.`,
  footerEditLink: `Edit this page on GitHub`,
  logo: (
    <>
      <img width={42} src="./img/favicon.png" alt="NAPI-RS" />
      <span style={{ marginLeft: '20px' }}>
        A{' '}
        <span
          className="mx-2 font-extrabold hidden md:inline select-none"
          style={{ fontWeight: 'bolder' }}
        >
          framework
        </span>{' '}
        for building compiled Node.js add-ons in{' '}
        <span style={{ color: '#b7410e', fontWeight: 'bold' }}>Rust</span> via
        <span style={{ color: '#3C873A', fontWeight: 'bold' }}> Node-API</span>.
      </span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="NAPI-RS: the next docs builder" />
      <meta name="og:title" content="NAPI-RS: the next docs builder" />
    </>
  ),
}
