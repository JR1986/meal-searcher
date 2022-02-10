This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

This project is created with Nextjs in combination with Material UI.

To run the development server:

first:

```bash
npm install
```

second: 

```bash
npm run dev
```

To open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Styling

For custom styling I used emotion, which is included when you install the latest Material UI library. To start of, I used a <ThemeProvider> context to override the default theme with my own custom theme.
All component style overrides which are not set by the theme, are done with @emotion/styled or with the 'sx' prop. The sx prop is only used for quick style overides, for example with margins and paddings. 

## Data fetching

For initial data, I used the nextjs getStaticProps async functions. This function runs only at build time.
For getting the data based on event handling, I used the useEffect hook to make the api call. For the searchbox I added a debounce method, so it will not trigger the call immediately

## testing

For testing I used Jest

```bash
npm run test
```

## linter

eslint in combination with AirBnb styleguide. AutoFormat and AutoFix on save are enabled in VSCode.

