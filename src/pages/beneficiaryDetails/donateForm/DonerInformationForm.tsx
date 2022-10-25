import React, { ChangeEvent, useState, useEffect} from 'react';
import { TextField, Button } from '@mui/material';
import styles from 'styled-components';
import { CountryDropdown } from 'react-country-region-selector';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { createNewDonor } from '../../../store/slices/donorSlice';

const OuterDiv = styles.div`
padding: 20px;
border-radius: 20px;
`;

const ButtonWrapper = styles.div`
  padding-top:10px;
  padding-bottom:10px;
`;

const formFields = [
  { label: 'First Name', name: 'fName', type: 'text' },
  { label: 'Last Name', name: 'lName', type: 'text' },
  { label: 'Email address', name: 'email', type: 'email' },
  { label: 'Postal code', name: 'postalCode', type: 'text' },
];

interface Donor {
  _id: string;
  fname: string;
  lName: string;
  email: string;
  postalCode: string;
  country: string;
}

interface DonerInfoProp {
  isContinue: boolean;
  setIsConinue: Function;
}

export default function DonerInformationForm({ isContinue, setIsConinue }: DonerInfoProp) {
  const isLoading = useSelector((state: RootState) => state.donor.createDonorLoading);

  const [donerObj, setDonerObj] = useState({});
  const [country, setCountry] = useState('');

  const dispath = useDispatch<AppDispatch>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDonerObj({
      ...donerObj,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitData = () => {
    dispath(createNewDonor({ ...donerObj, country: country } as Donor));
  };

  useEffect(() => {
    if (isLoading === 'completed') {
      setIsConinue(true);
    }
  }, [isLoading, setIsConinue]);

  return (
    <OuterDiv>
      <ButtonWrapper>
        {formFields.map(val => (
          <div key={val.name} style={{ paddingBottom: '5px' }}>
            <TextField fullWidth label={val.label} name={val.name} onChange={handleChange} />
          </div>
        ))}
      </ButtonWrapper>
      <CountryDropdown value={country} onChange={value => setCountry(value)} />

      {!isContinue && (
        <ButtonWrapper>
          {isLoading === 'idle' ? (
            <Button
              sx={{ mt: 2 }}
              onClick={handleSubmitData}
              variant='contained'
              style={{
                background: 'green',
                bottom: '10px',
              }}
            >
              Continue
            </Button>
          ) : (
            'Loading....'
          )}
        </ButtonWrapper>
      )}
    </OuterDiv>
  );
}
