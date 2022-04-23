import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Link from "next/link";

import { ssrGetProducts } from "../../graphql/generated/page";
import { withApollo } from "../../lib/withApollo";

function Home() {
  const user = useUser();

  return (
    <div>
      <h1>Hello World</h1>

      <pre>{JSON.stringify(user, null, 2)}</pre>

      <Link href="/api/auth/logout">
        <a>Logout</a>
      </Link>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async () => {
    return {
      props: {},
    };
  },
});

export default withApollo(ssrGetProducts.withPage()(Home));
