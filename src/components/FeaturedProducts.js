import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button
} from "@mui/material";

const featuredProducts = [
  { id: 1, title: "Wireless Earbuds", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400", price: "₹2,499" },
  { id: 2, title: "Fitness Tracker", img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400", price: "₹1,999" },
  { id: 3, title: "Gaming Mouse", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400", price: "₹799" },
  { id: 4, title: "Action Camera", img: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=400", price: "₹4,999" },
];

export default function FeaturedProducts() {
  return (
    <>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Featured Products
      </Typography>
      <Grid
        container
        spacing={4}
        mb={4}
        alignItems="stretch"
      >
        {featuredProducts.map((product) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={product.id}
           sx={{ maxWidth: 340, mx: "auto" }}
          >
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={product.img}
                alt={product.title}
                sx={{ objectFit: "cover" }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" fontWeight="bold">
                  {product.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {product.price}
                </Typography>
                <Button 
                  variant="outlined" 
                  color="primary" 
                  size="small" 
                  href="/shop"
                  sx={{ mt: 1 }}
                  fullWidth
                >
                  View
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}