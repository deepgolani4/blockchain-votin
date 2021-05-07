import React from 'react';
import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core';
import { useSnackbar } from 'notistack';
import Page from './page';
var data = [
  {
    src:
      'https://upload.wikimedia.org/wikipedia/commons/0/0e/Prime_Minister_of_India_Narendra_Modi.jpg',
    title: 'Narendra Modi',
    id: 'modi',
    party: 'BJP',
  },
  {
    src:
      'https://upload.wikimedia.org/wikipedia/commons/0/0e/Prime_Minister_of_India_Narendra_Modi.jpg',
    title: 'Mamta Banerjee',
    id: 'banerjee',
    party: 'BJP',
  },
  {
    src:
      'https://upload.wikimedia.org/wikipedia/commons/0/0e/Prime_Minister_of_India_Narendra_Modi.jpg',
    title: 'vijay Patil',
    id: 'patil',
    party: 'BJP',
  },
];

export default function ShopSearch() {
  const { enqueueSnackbar } = useSnackbar();
  const [party, setParty] = React.useState(data);
  const [value, setValue] = React.useState('');

  React.useEffect(() => {
    // setProducts((products) => [...products]);
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    const { party } = e.target.elements;

    enqueueSnackbar('Vote Success', {
      variant: 'success',
    });
  };

  return (
    <Page title="Vote">
      <p className="text-center font-black text-3xl">List of Candidates</p>
      <Container>
        <form onSubmit={submit}>
          <FormControl style={{ width: '100%' }}>
            <RadioGroup value={value} name="party" onChange={handleChange}>
              <table className="text-left table-auto">
                <thead className="bg-black flex text-white w-100 border-2 border-gray-700 rounded-lg">
                  <tr className="flex w-full mb-4 text-center">
                    <th className="p-4 w-1/4">Image</th>
                    <th className="p-4 w-1/4">Name</th>
                    <th className="p-4 w-1/4">Candidate Name</th>
                    <th className="p-4 w-1/4">Choose</th>
                  </tr>
                </thead>
                <tbody className="bg-grey-light flex flex-col items-center overflow-y-scroll w-100">
                  {party.map((par_) => {
                    return (
                      <tr className="text-center flex w-full mb-4">
                        <td className="flex justify-center p-4 w-1/4">
                          <img
                            src={par_.src}
                            height={100}
                            width={100}
                            alt={par_.id}
                          />
                        </td>
                        <td className="flex justify-center p-4 w-1/4">
                          <span className="inline-block align-middle">
                            {par_.party}
                          </span>
                        </td>
                        <td className="flex justify-center p-4 w-1/4">
                          <span className="inline-block align-middle">
                            {par_.title}
                          </span>
                        </td>
                        <td className="flex justify-center p-4 w-1/4">
                          <FormControlLabel
                            value={par_.id}
                            control={<Radio />}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </RadioGroup>
          </FormControl>
          <FormControl style={{ justifyContent: 'center' }}>
            <Button
              style={{ margin: 70 }}
              color="primary"
              type="submit"
              variant="contained"
            >
              Submit Vote
            </Button>
          </FormControl>
        </form>
      </Container>
    </Page>
  );
}
