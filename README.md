Sri Baba Vaidyanath Steels

An online platform for selling steel products directly to customers. Browse steel by type, place an order, and pay securely online, all without a middleman.

Live site: www.sribabavaidyanathsteels.online

Overview

Buying steel traditionally means visiting shops, negotiating prices, and arranging payment by hand. This project moves that process online. Customers can explore the steel catalogue, pick the type and quantity they need, and complete payment from one website.

Features
Direct-to-customer selling: no third-party marketplace needed
Multiple steel categories: browse and select different types of steel
Online payment: secure checkout with an integrated payment gateway
Responsive design: works on mobile, tablet, and desktop
About and intro sections: business information and company introduction
Production deployment: hosted on Vercel with continuous deployment from GitHub
Tech Stack
Layer	Technology
Framework	Next.js (React)
Styling	CSS / Tailwind CSS
Payments	Razorpay / Stripe
Hosting	Vercel
Version control	Git and GitHub


Project Structure
SRI_BABA_VAIDYANATH_STEELS/
├── app/          # Pages and routes
├── components/   # Reusable UI components
├── hooks/        # Custom React hooks
├── lib/          # Helper functions and utilities
├── public/       # Static assets (images, icons)
├── styles/       # Global styles
└── about.html    # About page
Getting Started
Prerequisites
Node.js 18 or higher
npm
Installation
bash
# 1. Clone the repository
git clone https://github.com/<your-username>/SRI_BABA_VAIDYANATH_STEELS.git

# 2. Move into the project folder
cd SRI_BABA_VAIDYANATH_STEELS

# 3. Install dependencies
npm install

# 4. Add environment variables (see below)

# 5. Start the development server
npm run dev

Open http://localhost:3000 in your browser.


Environment Variables

Create a .env.local file in the project root:

env
# Payment gateway keys (example names, use the ones your project needs)
NEXT_PUBLIC_PAYMENT_KEY_ID=your_key_id
PAYMENT_KEY_SECRET=your_key_secret

Never commit .env.local to GitHub.

Production Build
bash
npm run build
npm start
Deployment

The project is deployed on Vercel. Every push to the main branch triggers an automatic production deployment.

What I Learned
Building a full e-commerce flow: catalogue, selection, and payment
Structuring a Next.js app with reusable components and custom hooks
Integrating an online payment gateway
Deploying and maintaining a live website with a custom domain
Future Improvements
 User accounts and order history
 Admin dashboard to manage products and prices
 Bulk-order and quotation requests
 Order tracking and email or WhatsApp notifications
 Search and filters by grade, size, and price
Author

Suraj Kumar GitHub: surajchaudhary-11 LinkedIn: surajchaudhary

License

This project is licensed under the MIT License.
