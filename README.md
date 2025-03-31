# Modern eCommerce Platform

A full-featured eCommerce platform with separate user and admin panels, built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Features

### User Panel
- User account management with social login
- Product browsing with advanced filters
- Shopping cart and secure checkout
- Order tracking and notifications
- Personalized recommendations
- Mobile-responsive design

### Admin Panel
- Comprehensive dashboard
- Product and inventory management
- Order fulfillment system
- Customer management
- Advanced analytics
- Role-based access control

## Tech Stack

- Frontend: React.js, Redux Toolkit, Material-UI
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT, Passport.js
- Payment Processing: Stripe, eSewa
- Real-time Features: Socket.io
- File Upload: Multer
- Email Service: Nodemailer

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a .env file in the root directory with:
   ```
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
ecommerce-platform/
├── frontend/           # React frontend
├── backend/           # Node.js backend
├── public/            # Static files
└── package.json      # Project dependencies
```
