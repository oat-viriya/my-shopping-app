# Next.js User Dashboard Application

This project is a [Next.js](https://nextjs.org) application bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

The app features:

1. **Homepage**
2. **Product Detail Page**
3. **Cart Page**
4. **Favorite Page**

## Features

- Browse a list of products.
- View detailed information for each product.
- Add products to your shopping cart.
- Mark products as favorites for easy access.

## Prerequisites

To run this project, ensure the following prerequisites are met:

- **Node.js**: You need to have Node.js installed on your machine. [Download Node.js here](https://nodejs.org/).
- **PNPM**: The project uses PNPM as the package manager. Refer to [https://pnpm.io/installation](https://pnpm.io/installation) for installation guidelines.

After PNPM is installed, follow these steps:

1. **Install Dependencies**:
   Navigate to the project root and run the following command to install the necessary dependencies:

   ```bash
   pnpm install
   ```

## Pages Overview

### 1. Homepage

The homepage displays a list of products available for purchase.

### 2. Product Detail Page

Clicking on a product shows detailed information about the selected item, including images, description, and price. Users can add the product to their cart or mark it as a favorite.

### 3. Cart Page

The cart page displays all products added to the cart. Users can update quantities or remove items before proceeding to checkout.

### 4. Favorite Page

The favorite page lists all products the user has marked as favorites for quick access.

## Getting Started

To run the project locally:

1. **Start the Development Server**:
   Use the following command to start the development server:

   ```bash
   pnpm dev
   ```

2. **View in Browser**:
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.
