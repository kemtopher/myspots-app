import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';


export const FormAuth = ({
    email,
  setEmail,
  username,
  setUsername,
  password,
  setPassword,
  handleSubmit
}) => {
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState(null);

  const styles = {
    formStyles: {
      margin: '2em 0',
      width: '100%'
    },
    fieldStyles: {
      marginBottom: '1em'
    },
  };

  return (
    <form className={styles.formStyles}>
      <Grid container direction="column" alignItems="center">
        <TextField
          variant="outlined"
          label="Email"
          error={error}
          helperText={helperText}
          value={email}
          required
          sx={styles.fieldStyles}
          fullWidth
        //   customClass="field-margin-bottom"
          onChange={(e) => setEmail(e)}
        />

        <TextField
          variant="outlined"
          label="Username"
          error={error}
          helperText={helperText}
          value={username}
          required
          sx={styles.fieldStyles}
          fullWidth
          onChange={(e) => setUsername(e)}
        />

        <TextField
          variant="outlined"
          type="password"
          label="Password"
          error={error}
          helperText={helperText}
          value={password}
          required
          sx={styles.fieldStyles}
          fullWidth
          onChange={(e) => setPassword(e)}
        />

        <Button
          variant="contained"
          onClick={handleSubmit}
          fullWidth
          size="large"
          disableElevation
          type="submit"
        >Submit</Button>
      </Grid>
    </form>
  );
};
