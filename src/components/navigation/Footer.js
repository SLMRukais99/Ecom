import React from "react";
import { Box, Typography, Link, Grid, IconButton } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(90deg, #1976d2 40%, #42a5f5 100%)",
        color: "#fff",
        mt: 6,
        pt: 4,
        pb: 2,
        px: { xs: 2, md: 8 },
      }}
    >
      <Grid
        container
        spacing={3}
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{
          flexDirection: { xs: 'column', sm: 'row' },
          textAlign: { xs: 'center', sm: 'left',  },
       alignItems: { xs: 'center', md: 'flex-start' },
        }}
      >
        {/* Brand Info */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Ecom
          </Typography>
          <Typography variant="body2">
            Your one-stop shop for the best electronics!
          </Typography>
        </Grid>
        
        {/* Quick Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Quick Links
          </Typography>
          <Box>
            <Link
              href="/"
              color="inherit"
              underline="hover"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "flex-start" },
                mb: 0.5
              }}
            >
             Home
            </Link>
            <Link
              href="/shop"
              color="inherit"
              underline="hover"
              sx={{
                display: "block",
                mb: 0.5,
               textAlign: { xs: "center", sm: "left" }
              }}
            >
              Shop
            </Link>
            <Link
              href="/about"
              color="inherit"
              underline="hover"
              sx={{
                display: "block",
                mb: 0.5,
                  textAlign: { xs: "center", sm: "left" }
              }}
            >
              About
            </Link>
            <Link
              href="/contact"
              color="inherit"
              underline="hover"
              sx={{
                display: "block",
                textAlign: { xs: "center", sm: "left" }
              }}
            >
              Contact
            </Link>
          </Box>
        </Grid>
        
        {/* Customer Service (Extra Column) */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Customer Service
          </Typography>
          <Box>
            <Link
              href="/faq"
              color="inherit"
              underline="hover"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "flex-start" },
                mb: 0.5
              }}
            >
              FAQ
            </Link>
            <Link
              href="/returns"
              color="inherit"
              underline="hover"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "flex-start" },
                mb: 0.5
              }}
            >
              Returns
            </Link>
            <Link
              href="/help"
              color="inherit"
              underline="hover"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "flex-start" }
              }}
            >
             Help Center
            </Link>
          </Box>
        </Grid>
        
        {/* Follow Us with Icons */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Follow Us
          </Typography>
          <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
            <IconButton href="https://facebook.com" target="_blank" sx={{ color: "#fff" }} aria-label="Facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton href="https://wa.me/yourwhatsapplink" target="_blank" sx={{ color: "#fff" }} aria-label="WhatsApp">
              <WhatsAppIcon />
            </IconButton>
            <IconButton href="https://instagram.com" target="_blank" sx={{ color: "#fff" }} aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
            <IconButton href="https://twitter.com" target="_blank" sx={{ color: "#fff" }} aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      <Typography variant="body2" align="center" sx={{ mt: 4, opacity: 0.8 }}>
        © {new Date().getFullYear()} Ecom. All rights reserved.
      </Typography>
      
    </Box>
  );
}