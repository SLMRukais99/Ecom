import React from "react";
import { Box, Typography, Button, Grid, Card, CardMedia, CardContent } from "@mui/material";
import PopularProducts from "../components/PopularProducts";
import FeaturedProducts from "../components/FeaturedProducts";



const featuredProducts = [
  { id: 1, title: "Wireless Headphones", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400", price: "₹1,999" },
  { id: 2, title: "Smart Watch", img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400", price: "₹2,499" },
  { id: 3, title: "Bluetooth Speaker", img: "https://images.unsplash.com/photo-1470259078422-826894b933aa?w=400", price: "₹999" },
  { id: 4, title: "VR Headset", img: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=400", price: "₹4,499" },
];

export default function HomePage() {
  return (
    <Box>
      {/* Hero Section with Image */}
  <Box
        sx={{
          background: "linear-gradient(90deg, #1976d2 40%, #42a5f5 100%)",
          color: "#fff",
          borderRadius: 2,
          mb: 6,
          px: { xs: 2, md: 4 },
          py: { xs: 4, md: 8 },
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={4}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Welcome to Ecom
            </Typography>
            <Typography variant="h6" gutterBottom>
              Shop the best electronics at unbeatable prices!
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              href="/shop"
              sx={{ mt: 2 }}
            >
              Shop Now
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500"
              alt="Wireless Headphones"
              sx={{
                width: { xs: "80%", sm: "60%", md: "80%", lg: 350 },
                maxWidth: 350,
                borderRadius: 4,
                objectFit: "contain",
                boxShadow: "none", // No card shadow or border
                background: "none",
              }}
            />
          </Grid>
        </Grid>
      </Box>


      {/* Popular Products */}
  
       <PopularProducts title="Popular Products" />




      {/* Featured Products */}
      <FeaturedProducts/>


      {/* Level Up Section */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 4,
          bgcolor: '#f5f5f5',
          borderRadius: 2,
          p: 4,
          mb: 6,
          flexDirection: { xs: 'column', md: 'row' }
        }}
      >
        {/* Left Image */}
        <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }}>
          <img
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=300"
            alt="Product 1"
            style={{ width: '100%', borderRadius: '16px', maxWidth: 180 }}
          />
        </Box>

        {/* Center Text + Shop Now Button */}
        <Box sx={{ flex: 2, textAlign: 'center' }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Level up your purchasing experience
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            from immersive product discovery to seamless checkout and delivery
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/shop"
            sx={{ mt: 2 }}
          >
            Shop Now
          </Button>
        </Box>

        {/* Right Image */}
        <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }}>
          <img
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300"
            alt="Product 2"
            style={{ width: '100%', borderRadius: '16px', maxWidth: 180 }}
          />
        </Box>
      </Box>

     

   
      
    </Box>
  );
}