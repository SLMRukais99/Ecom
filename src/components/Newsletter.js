import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";

export default function Newsletter() {
  return (
    <Box
      sx={{
        background: "linear-gradient(90deg, #42a5f5 40%, #1976d2 100%)",
        color: "#fff",
        borderRadius: 2,
        p: { xs: 2, md: 4 },
        my: 6,
        display: "flex",
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2
      }}
    >
      <Typography variant="h6" sx={{ mb: { xs: 2, md: 0 } }}>
        Subscribe now & get <b>20% off</b>
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          width: { xs: '100%', md: 'auto' }
        }}
        onSubmit={e => {
          e.preventDefault();
          // TODO: handle subscribe action here
        }}
      >
        <TextField
          placeholder="Enter your email ID"
          variant="outlined"
          size="small"
          sx={{
            bgcolor: "#fff",
            borderRadius: 2,
            mr: 1,
            width: { xs: '100%', md: 250 }
          }}
          InputProps={{
            sx: { borderRadius: 2 },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          sx={{ borderRadius: 2, px: 3 }}
        >
          Subscribe
        </Button>
      </Box>
    </Box>
  );
}
