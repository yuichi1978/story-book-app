/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Container, Box, Stack, Button } from "@mui/joy";
import Typography from "@mui/joy/Typography";
import Grid from "@mui/joy/Grid";
import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Slider from "@mui/joy/Slider";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

/* Accordion */
import Accordion from "@mui/joy/Accordion";
import AccordionGroup from "@mui/joy/AccordionGroup";
import AccordionSummary from "@mui/joy/AccordionSummary";

import { orderLists } from "../utils/orderLists";

const Item = styled(Sheet)(({ theme }) => ({
  textAlign: "center",
  borderRadius: 10,
  color: theme.vars.palette.text.secondary,
}));

const OrderList = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleAccordionAdd = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Container
        sx={{
          "@media (min-width: 609px)": {
            width: "90%",
            margin: "0 auto",
            maxWidth: "1080px",
          },
        }}
      >
        <Box sx={{ marginTop: { xs: "30px", sm: "50px" } }}>
          <Typography
            component="h1"
            sx={{
              display: {
                xs: "none",
                sm: "block",
                textAlign: "center",
                fontSize: "27px",
                fontWeight: "bold",
              },
            }}
          >
            ご注文内容
          </Typography>
        </Box>
        {orderLists.map((list, index) => (
          <>
            <Box key={index} sx={{ textAlign: "center" }}>
              <Typography
                component="p"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                注文番号 : {list.orderId}
              </Typography>
            </Box>

            <Box
              sx={{
                width: { xs: "80%" },
                margin: { xs: "0 auto" },
                "@media (min-width: 600px)": {
                  maxWidth: "500px",
                  margin: "0 auto",
                  textAlign: "center",
                },
              }}
            >
              <Slider
                color="primary"
                orientation="horizontal"
                size="lg"
                // variant="plain"
                sx={{
                  marginTop: "30px",
                  "--Slider-trackSize": "25px",
                  color: "#54B8C9",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              <Typography
                level="title-lg"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                1.注文内容確認
              </Typography>
              <Typography
                level="title-lg"
                sx={{ display: { xs: "block", sm: "none" } }}
              >
                注文確認
              </Typography>
              <Typography
                level="title-lg"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                2.お客様情報入力
              </Typography>
              <Typography
                level="title-lg"
                sx={{ display: { xs: "block", sm: "none" } }}
              >
                お客様情報入力
              </Typography>
              <Typography
                level="title-lg"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                3.注文完了
              </Typography>
              <Typography
                level="title-lg"
                sx={{ display: { xs: "block", sm: "none" } }}
              >
                注文完了
              </Typography>
              <Typography
                level="title-lg"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                4.生産開始
              </Typography>
              <Typography
                level="title-lg"
                sx={{ display: { xs: "block", sm: "none" } }}
              >
                生産開始
              </Typography>
            </Box>

            <Box
              marginTop={5}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "center", sm: "flex-start" },
                justifyContent: { xs: "center" },
                padding: { xs: "auto", sm: "20px 0" },
              }}
            >
              <Box
                sx={{
                  paddingRight: { sm: "30px" },
                  width: { xs: "70%", sm: "280px" },
                  height: { xs: "auto", sm: "265px" },
                }}
              >
                <Image
                  src={list.image.url}
                  alt="Description of the image"
                  width={parseInt(list.image.width, 3)}
                  height={parseInt(list.image.height, 3)}
                  layout="responsive"
                  objectFit="cover"
                />
              </Box>
              <Box sx={{ width: { xs: "100%", sm: "540px" } }}>
                <List sx={{ padding: "0" }}>
                  <ListItem
                    sx={{
                      borderBottom: "1px solid #ccc",
                      padding: "20px 0",
                      fontSize: { xs: "16px", md: "14px" },
                    }}
                  >
                    <Typography
                      level="title-lg"
                      sx={{ fontSize: { xs: "20px", sm: "15px" } }}
                    >
                      注文日
                    </Typography>
                    <Typography
                      level="title-sm"
                      sx={{
                        fontSize: { xs: "12px" },
                        "@media (min-width: 670px)": {
                          fontSize: "10px",
                        },
                        "@media (min-width: 671px)": {
                          fontSize: "12px",
                        },
                      }}
                    >
                      {list.orderDate}
                    </Typography>
                  </ListItem>
                  <ListItem
                    sx={{
                      borderBottom: "1px solid #ccc",
                      padding: "20px 0",
                      fontSize: { xs: "16px", md: "14px" },
                    }}
                  >
                    <Typography
                      level="title-lg"
                      sx={{ fontSize: { xs: "20px", sm: "15px" } }}
                    >
                      先行発注の同意
                    </Typography>
                    <Typography
                      level="title-sm"
                      sx={{
                        display: "flex",
                        padding: { md: "0 10px" },
                        fontSize: { xs: "12px" },
                        "@media (min-width: 670px)": {
                          fontSize: "10px",
                        },
                        "@media (min-width: 671px)": {
                          fontSize: "12px",
                        },
                      }}
                    >
                      {list.advanceorder.map((order, index) => (
                        <span
                          key={index}
                          style={{
                            border: "1px solid #656565",
                            borderRadius: "30px",
                            padding: "0 5px",
                            marginRight: "7px",
                          }}
                        >
                          {order.consent || order.ordered}
                        </span>
                      ))}
                    </Typography>
                  </ListItem>
                  <ListItem
                    sx={{
                      borderBottom: "1px solid #ccc",
                      padding: "20px 0",
                      fontSize: { xs: "16px", md: "14px" },
                    }}
                  >
                    <Typography
                      level="title-lg"
                      sx={{ fontSize: { xs: "20px", sm: "15px" } }}
                    >
                      お届け希望
                    </Typography>
                    <Typography
                      level="title-sm"
                      sx={{
                        border: "1px solid #59B838",
                        borderRadius: "30px",
                        padding: "0 5px",
                        backgroundColor: "#ECF5EA",
                        fontSize: { xs: "12px" },
                        "@media (min-width: 670px)": {
                          fontSize: "10px",
                        },
                        "@media (min-width: 671px)": {
                          fontSize: "12px",
                        },
                      }}
                    >
                      {list.shippingType}
                    </Typography>
                  </ListItem>
                  <ListItem
                    sx={{
                      borderBottom: "1px solid #ccc",
                      padding: "20px 0",
                      fontSize: { xs: "16px", md: "14px" },
                    }}
                  >
                    <Typography
                      level="title-lg"
                      sx={{ fontSize: { xs: "20px", sm: "15px" } }}
                    >
                      プリント
                    </Typography>
                    <Typography
                      level="title-sm"
                      sx={{ display: { xs: "none", sm: "flex" } }}
                    >
                      {list.print.map((item, index) => (
                        <Typography
                          key={index}
                          sx={{
                            border: "1px solid #656565",
                            borderRadius: "30px",
                            padding: "0 5px",
                            marginRight: "7px",
                            fontSize: { xs: "10px" },
                            "@media (min-width: 670px)": {
                              fontSize: "10px",
                            },
                            "@media (min-width: 671px)": {
                              fontSize: "12px",
                            },
                          }}
                        >
                          {item.leftchest || item.rightchest}
                        </Typography>
                      ))}
                    </Typography>
                  </ListItem>
                  <ListItem
                    sx={{
                      borderBottom: "1px solid #ccc",
                      padding: "20px 0",
                      fontSize: { xs: "16px", md: "14px" },
                      position: "relative",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: "auto", sm: "100%" },
                        display: { xs: "auto", sm: "flex" },
                        alignItems: "center",
                        flexWrap: "wrap",
                      }}
                    >
                      <Typography
                        level="title-lg"
                        sx={{
                          fontSize: { xs: "20px", sm: "15px" },
                          backgroundColor: "#54B8C9",
                          display: { xs: "table", sm: "inline" },
                          padding: "5px 15px",
                          borderRadius: "30px",
                          color: "white",
                          marginRight: "7px",
                        }}
                      >
                        {list.wear.brand}
                      </Typography>
                      <Typography
                        level="title-sm"
                        sx={{
                          marginTop: { xs: "10px", sm: "0" },
                          fontSize: "16px",
                        }}
                      >
                        {list.wear.itemNumber}
                      </Typography>
                      <Typography
                        level="title-sm"
                        sx={{
                          color: "#585858",
                          fontSize: "14px",
                          marginLeft: { xs: "0", sm: "5px" },
                        }}
                      >
                        {list.wear.name}
                      </Typography>
                      <Typography
                        sx={{ position: "absolute", top: "15px", right: "0" }}
                      >
                        <KeyboardArrowUpIcon />
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        level="title-sm"
                        sx={{
                          width: "100%",
                          display: "flex",
                          alignItems: "flex-start",
                          flexWrap: "wrap",
                        }}
                      >
                        {list.wear.orderItem.map((item, index) => (
                          <Typography
                            key={index}
                            sx={{
                              border: "1px solid #656565",
                              borderRadius: "30px",
                              padding: "0 5px",
                              marginRight: "7px",
                              fontSize: { xs: "10px" },
                              "@media (min-width: 670px)": {
                                fontSize: "10px",
                              },
                              "@media (min-width: 671px)": {
                                fontSize: "12px",
                              },
                            }}
                          >
                            <span>{item.Ssize || item.Msize}</span>
                          </Typography>
                        ))}
                      </Typography>
                    </Box>
                  </ListItem>
                  <ListItem
                    sx={{
                      borderBottom: "1px solid #ccc",
                      padding: "20px 0",
                      fontSize: { xs: "16px", md: "14px" },
                      position: "relative",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: "auto", sm: "100%" },
                        display: { xs: "auto", sm: "flex" },
                        alignItems: "center",
                        flexWrap: "wrap",
                        position: "realtive",
                      }}
                    >
                      <Typography
                        level="title-lg"
                        sx={{
                          fontSize: { xs: "20px", sm: "15px" },
                          backgroundColor: "#54B8C9",
                          display: { xs: "table", sm: "inline" },
                          padding: "5px 15px",
                          borderRadius: "30px",
                          color: "white",
                          marginRight: "7px",
                        }}
                      >
                        {list.wear.brand}
                      </Typography>
                      <Typography
                        level="title-sm"
                        sx={{
                          marginTop: { xs: "10px", sm: "0" },
                          fontSize: "16px",
                        }}
                      >
                        {list.wear.itemNumber}
                      </Typography>
                      <Typography
                        level="title-sm"
                        sx={{
                          color: "#585858",
                          fontSize: "14px",
                          marginLeft: { xs: "0", sm: "5px" },
                        }}
                      >
                        {list.wear.name}
                      </Typography>
                      <Typography
                        sx={{
                          position: "absolute",
                          right: { xs: "0", sm: "0" },
                          transform: "translateY(-50%)",
                          top: { xs: "50%" },
                        }}
                      >
                        <KeyboardArrowDownIcon />
                      </Typography>
                    </Box>
                  </ListItem>
                </List>

                {/* <AccordionGroup>
                  <Accordion
                    sx={{
                      padding: "10px 0",
                    }}
                  >
                    <AccordionSummary className="arrowtop">
                      <Typography
                        level="title-md"
                        sx={{ fontSize: { xs: "20px", sm: "15px" } }}
                      >
                        <Typography
                          sx={{
                            backgroundColor: "#54B8C9",
                            display: { xs: "table", sm: "inline" },
                            padding: "5px 15px",
                            borderRadius: "30px",
                            color: "white",
                            marginRight: "7px",
                          }}
                        >
                          {list.wear.brand}
                        </Typography>
                        <span style={{ fontSize: "14px" }}>
                          {list.wear.itemNumber}
                        </span>
                        <span style={{ fontSize: "13px" }}>
                          {list.wear.name}
                        </span>
                        <br />
                        <Typography sx={{ marginTop: { sm: "15px" } }}>
                          {list.wear.orderItem.map((size, index) => (
                            <Typography
                              key={index}
                              sx={{
                                border: "1px solid #656565",
                                borderRadius: "30px",
                                padding: "0 5px",
                                marginRight: "7px",
                                fontSize: { xs: "10px" },
                                "@media (min-width: 670px)": {
                                  fontSize: "10px",
                                },
                                "@media (min-width: 671px)": {
                                  fontSize: "12px",
                                },
                              }}
                            >
                              {size.Ssize || size.Msize}
                            </Typography>
                          ))}
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                  </Accordion>
                  <Accordion
                    sx={{ padding: "10px 0", borderBottom: "1px solid #ccc" }}
                  >
                    <AccordionSummary className="arrowdowm">
                      <Typography
                        level="title-md"
                        sx={{
                          fontSize: { xs: "20px", sm: "15px" },
                        }}
                      >
                        <Typography
                          sx={{
                            backgroundColor: "#54B8C9",
                            display: { xs: "table", sm: "inline" },
                            padding: "5px 15px",
                            borderRadius: "30px",
                            color: "white",
                            marginRight: "7px",
                          }}
                        >
                          {list.wear.brand}
                        </Typography>
                        <span style={{ fontSize: "14px" }}>
                          {list.wear.itemNumber}
                        </span>
                        <span style={{ fontSize: "13px" }}>{list.wear.name}</span>
                      </Typography>
                    </AccordionSummary>
                  </Accordion>
                </AccordionGroup> */}

                <Box>
                  <Typography component="p">
                    <span style={{ fontWeight: "bold" }}>合計金額 ￥</span>
                    <span style={{ fontSize: "35px" }}>{list.price}</span>円
                  </Typography>
                </Box>
                <Box sx={{ paddingTop: "50px" }}>
                  <Button
                    size="lg"
                    fullWidth
                    variant="outlined"
                    sx={{
                      padding: { xs: "20px", sm: "10px" },
                      fontSize: { xs: "20px", sm: "15px" },
                    }}
                    style={{
                      backgroundColor: "#54B8C9",
                      color: "white",
                    }}
                  >
                    {list.link.detail}
                  </Button>
                </Box>
                <Grid
                  container
                  spacing={2}
                  columns={16}
                  sx={{
                    flexGrow: 1,
                    marginTop: "10px",
                  }}
                >
                  <Grid
                    xs={8}
                    sx={{
                      "@media (max-width: 800px)": {
                        width: "100%",
                        padding: "10px",
                      },
                    }}
                  >
                    <Item
                      sx={{
                        padding: { xs: "20px", sm: "10px" },
                        fontSize: { xs: "20px", sm: "15px" },
                        backgroundColor: "#000000",
                        color: "white",
                        cursor: "pointer",
                      }}
                    >
                      {list.link.document}
                    </Item>
                  </Grid>
                  <Grid
                    xs={8}
                    sx={{
                      "@media (max-width: 800px)": {
                        width: "100%",
                        padding: "10px",
                      },
                    }}
                  >
                    <Box>
                      <Item
                        sx={{
                          padding: { xs: "20px", sm: "10px" },
                          fontSize: { xs: "20px", sm: "15px" },
                          backgroundColor: "#000000",
                          color: "white",
                          cursor: "pointer",
                          position: "relative",
                          borderRadius: "10px 10px 0 0",
                        }}
                        onClick={handleAccordionAdd}
                      >
                        {list.link.various}
                        <KeyboardArrowDownIcon
                          sx={{ position: "absolute", right: "7px" }}
                        />
                      </Item>
                    </Box>
                    {isAccordionOpen && (
                      <AccordionGroup>
                        <Accordion>
                          <AccordionSummary
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              padding: "20px 7px",
                              backgroundColor: "#54B8C9",
                            }}
                          >
                            <Typography
                              sx={{ color: "white" }}
                              className="arrowicon"
                            >
                              {list.link.quotation}
                            </Typography>
                            <Typography>
                              <SaveAltIcon sx={{ color: "white" }} />
                            </Typography>
                          </AccordionSummary>
                          <AccordionSummary
                            sx={{
                              padding: "20px 7px",
                              backgroundColor: "#F3F4F7",
                            }}
                          >
                            <Typography
                              sx={{ color: "#837171" }}
                              className="arrowicon"
                            >
                              {list.link.invoice}
                            </Typography>
                            <Typography>
                              <SaveAltIcon sx={{ color: "#837171" }} />
                            </Typography>
                          </AccordionSummary>
                          <AccordionSummary
                            sx={{
                              padding: "20px 7px",
                              backgroundColor: "#F3F4F7",
                              borderRadius: "0 0 10px 10px",
                            }}
                          >
                            <Typography
                              sx={{ color: "#837171" }}
                              className="arrowicon"
                            >
                              {list.link.receipt}
                            </Typography>
                            <Typography>
                              <SaveAltIcon sx={{ color: "#837171" }} />
                            </Typography>
                          </AccordionSummary>
                        </Accordion>
                      </AccordionGroup>
                    )}
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </>
        ))}
      </Container>
    </>
  );
};

export default OrderList;
