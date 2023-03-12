import "server-only";
import Full from "./components/Full";
import Stub from "./components/Stub";

const API = "http://localhost:8080";
const headers = {
  "Content-Type": "application/json",
  "X-Hasura-Admin-Secret": "admin_secret",
};

// export const dynamic = "force-static",
//   dynamicParams = true;

export async function generateStaticParams() {
  const response = await fetch(`${API}/api/rest/topics/all`, { headers });
  const { topics } = await response.json();
  return topics;
}

export default async function Topic({ params: { topic: slug } }: any) {
  const {
    topic: [data],
  } = await (await fetch(`${API}/api/rest/topic/${slug}`, { headers })).json();
  const isStub = !data?.descriptions?.length;
  const Page = isStub ? Stub : Full;
  return <Page data={{ slug, ...data }} />;
  // return <Full {...props} />;
}
