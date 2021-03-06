import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = props => (
  <Layout title={'Home'}>
    <h1>Smash Ultimate Stagelists</h1>
    <ul>
      {props.stagelists.map(stagelist => (
        <li key={stagelist}>
          <Link as={`/s/${stagelist}`} href={`/stagelist?id=${stagelist}`}>
            <a>{stagelist}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://raw.githubusercontent.com/JoshMontech/smashbans/master/stagelists/stagelists.json');
  const data = await res.json();

  // console.log(`Show data fetched. Count: ${data.length}`);
  const stagelists = data.stagelists;
  return { stagelists };
};

export default Index;