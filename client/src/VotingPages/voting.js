import React, { Component } from "react";
import { Box, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ProductCard from "./productCard";
import Page from "./page";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  productCard: {
    height: "100%",
  },
  mainRaised: {
    padding: "10px 10px 10px 0px",
    margin: "0px 1.9vw 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  frontline: {
    fontSize: "30px",
    padding: "10px 10px 10px 0px",
    margin: "0px 1.9vw 0px",
    fontFamily: "Helvetica",
  },
}));

var data = [
  {
    src:
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Prime_Minister_of_India_Narendra_Modi.jpg",
    title: "Narendra Modi",
    subTitle:
      "it's your boi narendra modi, i am god and i mean it. congress is like my lil bitch who don't know how to do shit",
    party: "BJP",
  },
  {
    src:
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Prime_Minister_of_India_Narendra_Modi.jpg",
    title: "Narendra Modi",
    subTitle:
      "it's your boi narendra modi, i am god and i mean it. congress is like my lil bitch who don't know how to do shit",
    party: "BJP",
  },
  {
    src:
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Prime_Minister_of_India_Narendra_Modi.jpg",
    title: "Narendra Modi",
    subTitle:
      "it's your boi narendra modi, i am god and i mean it. congress is like my lil bitch who don't know how to do shit",
    party: "BJP",
  },
  {
    src:
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Prime_Minister_of_India_Narendra_Modi.jpg",
    title: "Narendra Modi",
    subTitle:
      "it's your boi narendra modi, i am god and i mean it. congress is like my lil bitch who don't know how to do shit",
    party: "BJP",
  },
];

export default function ShopSearch() {
  const classes = useStyles();
  const [products, setProducts] = React.useState(data);

  React.useEffect(() => {
    setProducts((products) => [...products]);
  }, []);

  return (
    <>
      <Page className={(classes.root, classes.mainRaised)} title="Search">
        <p className={classes.frontline}> List of Cnadidates</p>
        <Container maxWidth={false}>
          {/* <Toolbar /> */}
          <Box mt={3}>
            <Grid container spacing={3}>
              {products.map((product) => (
                <Grid item key={product.id} lg={4} md={6} xs={12}>
                  <ProductCard
                    className={classes.productCard}
                    product={product}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box mt={3} display="flex" justifyContent="center"></Box>
        </Container>
      </Page>
    </>
  );
}
