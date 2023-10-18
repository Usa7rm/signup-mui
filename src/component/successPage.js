import React from "react";
import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";


const SuccessPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Button variant="contained" color="primary">Success</Button>
    </div>
  );
};

export default SuccessPage;
