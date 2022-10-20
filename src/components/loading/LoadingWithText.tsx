import { Grid, Typography } from '@mui/material';
import LoadingSpinner from '../LoadingSpinner';
import styles from 'styled-components';

const SpinnerWrapper = styles.div`
display: flex; 
justifyContent: center;
paddingTop:10px;
`;

const SpinnerGridInnerDiv = styles.div`
paddingTop: 60px;
display: flex;
flexDirection: column;
alignItems: center;
`;

interface LoadingWithTextProps {
  uppreText: string;
  lowverText: string | boolean;
}

export default function LoadingWithText({ uppreText, lowverText }: LoadingWithTextProps) {
  return (
    <Grid container justifyContent={'center'}>
      <Grid item>
        <SpinnerGridInnerDiv>
          <Typography style={{ fontSize: '30px', fontWeight: 'bold' }}>{uppreText}</Typography>
          <SpinnerWrapper style={{ display: 'flex', justifyContent: 'center' }}>
            <LoadingSpinner />
          </SpinnerWrapper>

          <Typography
            style={{
              fontSize: '15px',
              marginTop: '20px',
              fontStyle: 'italic',
            }}
          >
            {lowverText}
          </Typography>
        </SpinnerGridInnerDiv>
      </Grid>
    </Grid>
  );
}
