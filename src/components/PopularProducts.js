import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box
} from "@mui/material";

const popularProducts = [
  { id: 1, title: "Smartphone", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400", price: "₹7,999" },
  { id: 2, title: "Headphones", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400", price: "₹1,999" },
  { id: 3, title: "Smartwatch", img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400", price: "₹2,499" },
 
  { id: 5, title: "VR Headset", img: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=400", price: "₹4,499" },
];

export default function PopularProducts() {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Popular Products
      </Typography>
      <Grid
        container
        spacing={4}
        mb={4}
        justifyContent={{ xs: "center", sm: "flex-start" }} // Center on mobile
        alignItems="stretch"
      >
        {popularProducts.map((product) => (
          <Grid
            item
            key={product.id}
            xs={12}
            sm={6}
            md={4}
            lg={2.4}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { xs: "100%", sm: "auto" },
              maxWidth: 330, // optional, for fixed max width
              mx: { xs: "auto", sm: 0 }, // center on xs
            }}
          >
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                image={product.img}
                alt={product.title}
                sx={{
                  height: 180,
                  width: "100%",
                  objectFit: "cover",
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" fontWeight="bold">
                  {product.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {product.price}
                </Typography>
              </CardContent>
              <Box sx={{ p: 2 }}>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  href="/shop"
                  fullWidth
                >
                  View
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}