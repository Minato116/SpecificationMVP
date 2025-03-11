import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularProgress, { circularProgressClasses } from '@mui/material/CircularProgress';

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        variant="determinate"
        sx={(theme) => ({
          color: theme.palette.grey[200],
          ...theme.applyStyles?.('dark', {
            color: theme.palette.grey[800],
          }),
        })}
        size={100}
        thickness={5}
        value={100}
      />
      <CircularProgress
        variant="determinate" // Removed `disableShrink` here
        sx={(theme) => ({
          color: '#1a90ff',
          animationDuration: '550ms',
          position: 'absolute',
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
          ...theme.applyStyles?.('dark', {
            color: '#308fe8',
          }),
        })}
        size={100}
        thickness={5}
        value={props.value} // Ensure this is correctly passed
      />

      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '100px',
          fontWeight: 'bold', // Fixed typo: 'blod' -> 'bold'
        }}
      >
        <Typography
          variant="caption"
          component="div"
          sx={{ color: 'text.secondary', fontSize: '30px' }}
        >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function CircularWithValueLabel(props) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    setProgress(props.score);
  }, [props.score]);

  return <CircularProgressWithLabel value={progress} />;
}
