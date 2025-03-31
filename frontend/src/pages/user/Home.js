import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Rating,
  Chip,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(45deg, #1976d2 30%, #21CBF3 90%)',
  color: 'white',
  padding: theme.spacing(15, 0),
  textAlign: 'center',
  marginBottom: theme.spacing(4),
}));

const ProductCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const FilterSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
}));

function Home() {
  const [sortBy, setSortBy] = React.useState('');
  const [priceRange, setPriceRange] = React.useState([0, 1000]);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Premium Headphones',
      price: 299.99,
      rating: 4.5,
      image: 'https://via.placeholder.com/300',
      discount: 10,
    },
    {
      id: 2,
      name: 'Wireless Mouse',
      price: 49.99,
      rating: 4.0,
      image: 'https://via.placeholder.com/300',
      discount: 0,
    },
    {
      id: 3,
      name: 'Mechanical Keyboard',
      price: 149.99,
      rating: 4.8,
      image: 'https://via.placeholder.com/300',
      discount: 15,
    },
    {
      id: 4,
      name: 'Gaming Monitor',
      price: 499.99,
      rating: 4.7,
      image: 'https://via.placeholder.com/300',
      discount: 5,
    },
  ];

  return (
    <Box>
      <HeroSection>
        <Container>
          <Typography variant="h2" gutterBottom>
            Welcome to Our Store
          </Typography>
          <Typography variant="h5" gutterBottom>
            Discover Amazing Products at Great Prices
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mt: 2 }}
          >
            Shop Now
          </Button>
        </Container>
      </HeroSection>

      <Container>
        <FilterSection>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <InputLabel>Sort By</InputLabel>
                <Select value={sortBy} onChange={handleSortChange}>
                  <MenuItem value="price_asc">Price: Low to High</MenuItem>
                  <MenuItem value="price_desc">Price: High to Low</MenuItem>
                  <MenuItem value="rating">Rating</MenuItem>
                  <MenuItem value="newest">Newest</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                label="Search Products"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography gutterBottom>Price Range</Typography>
              <Slider
                value={priceRange}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                min={0}
                max={1000}
              />
            </Grid>
          </Grid>
        </FilterSection>

        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={3}>
              <ProductCard>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {product.name}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mb: 1,
                    }}
                  >
                    <Typography variant="h6" color="primary">
                      ${product.price}
                    </Typography>
                    {product.discount > 0 && (
                      <Chip
                        label={`${product.discount}% OFF`}
                        color="secondary"
                        size="small"
                      />
                    )}
                  </Box>
                  <Rating value={product.rating} precision={0.5} readOnly />
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </ProductCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;
