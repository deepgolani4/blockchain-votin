import React, { Component } from "react";
import { Box, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProductCard from './productCardFinal'

import Page from "./page";
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
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
  check:{
    marginLeft:"1.9vw"
  }
}));

var data = [
  {
    src:
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Prime_Minister_of_India_Narendra_Modi.jpg",
    title: "Narendra Modi",
    id:'baal',
    subTitle:
      "it's your boi narendra modi, i am god and i mean it. congress is like my lil bitch who don't know how to do shit",
    party: "BJP",
  },
  {
    src:
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Prime_Minister_of_India_Narendra_Modi.jpg",
    title: "Mamta Banrjee",
    id:'modi',
    subTitle:
      "it's your boi narendra modi, i am god and i mean it. congress is like my lil bitch who don't know how to do shit",
    party: "BJP",
  },
  {
    src:
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Prime_Minister_of_India_Narendra_Modi.jpg",
    title: "Narendra Modi",
    id:'banrjee',
    subTitle:
      "it's your boi narendra modi, i am god and i mean it. congress is like my lil bitch who don't know how to do shit",
    party: "BJP",
  },
  {
    src:
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Prime_Minister_of_India_Narendra_Modi.jpg",
    title: "vijay Patil",
    id:'patil',
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

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [value, setValue] = React.useState('baal');
  return (
    <>
    
      <Page className={(classes.root, classes.mainRaised)} title="vote for your self">
        <p className={classes.frontline}> List of Cnadidates</p>
        <Container maxWidth={false}>
          {/* <Toolbar /> */}
          <FormControl component="fieldset">
  
          <Grid item xs={12}>
          <TableContainer>
            <Table>
              <TableHead>
              <RadioGroup value="datas" name="dataset" onChange={handleChange}>
                <TableRow>
                  <TableCell style={{paddingRight :'5vh'}}></TableCell>
                  <TableCell className={classes.check} style={{paddingRight :'8vh'}}> photo</TableCell>
                  <TableCell style={{paddingRight :'35vh'}}>Name of Candidates</TableCell>          
                  <TableCell style={{paddingRight :'43vh'}}>Cover Letter</TableCell>
                  <TableCell>Party</TableCell>
                  <TableCell >Select the appropiate button</TableCell>
                  </TableRow>
                  
                  {products.map((product) => {
                    return (
                      <TableRow>
                      <TableCell>
                        <img
                          alt={product.name}
                          height="150px"
                          width="150px"
                          src={product.src}
                        />
                      </TableCell>
                      <TableCell>{product.title}</TableCell>
                      <TableCell> {product.subTitle} </TableCell>
                      <TableCell> {product.party} </TableCell>
                      <TableCell></TableCell><TableCell></TableCell>
                      <TableCell>
                        <FormControlLabel control={<Radio />} value={product.title} label={ " -- " + product.title }  />
                      </TableCell>
                    </TableRow>
                    );
                    // return <ProductCard product={product} />;
                  })}
                </RadioGroup>
              </TableHead>
            </Table>
          </TableContainer>
        </Grid>
        </FormControl>
          <Box mt={3} display="flex" justifyContent="center"></Box>
        </Container>
      </Page>
    </>
  );
}
