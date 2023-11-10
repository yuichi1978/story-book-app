import Head from "next/head";
import OrderList from "../components/OrderList";

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <OrderList />
    </div>
  );
}
