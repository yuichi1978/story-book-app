import Head from "next/head";
import { Container, Box, Typography, Grid } from "@mui/joy";
import { orderLists } from "../utils/orderLists";

const OrderList = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Container>
        <Box>
          <Typography component="h1" sx={{ textAlign: "center" }}>
            ご注文内容
          </Typography>
        </Box>
        {orderLists.map((list, index) => (
          <>
            <Box key={index} sx={{ textAlign: "center" }}>
              <Typography component="p">注文番号 : {list.orderId}</Typography>
            </Box>
            <Box
              marginTop={5}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "center", sm: "flex-start" },
                justifyContent: { xs: "center", sm: "space-around" },
              }}
            >
              <img src={list.url} width={list.width} height={list.height} />
              <ul>
                <li>注文日 {list.orderDate}</li>
                <li>先行発注の同意 同意しない 発注済み</li>
                <li>お届け希望 {list.shippingType}</li>
                <li>プリント {list.print}</li>
                <li>合計金額 {list.price}</li>
              </ul>
            </Box>
          </>
        ))}
      </Container>
    </>
  );
};

export default OrderList;
