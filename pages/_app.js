import TeamDetailsState from '../context/teamdetails/TeamDetailsState';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <TeamDetailsState>
      <Component {...pageProps} />
    </TeamDetailsState>
  );
}
