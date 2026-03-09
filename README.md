# Auralex Studio Official Website

## Project Structure

The repository is structured as follows:

```
Auralex-Studio-Official-Website/
│
├── src/
│   ├── components/         # Reusable Components
│   ├── styles/             # Global Styles
│   ├── pages/              # Application Pages
│   └── utils/              # Utility Functions
│
├── public/                 # Static Assets
│   └── images/             # Image Files
│
├── .env                    # Environment Variables
├── package.json             # Project Metadata
└── README.md               # Project Documentation
```

## Tech Stack

This project is built using the following technologies:

- **Next.js**: A React framework for server-rendered or statically-exported React apps.
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Vercel**: A cloud platform for static sites and Serverless Functions.

## Getting Started Guide

To get started with the Auralex Studio Official Website, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/auralexstudioai/Auralex-Studio-Official-Website.git
   cd Auralex-Studio-Official-Website
   ```

2. **Install the dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   Your app will be running on [http://localhost:3000](http://localhost:3000).

## Free Deployment to Vercel

To deploy your application to Vercel for free, follow these steps:

1. **Sign up for a Vercel account** at [vercel.com](https://vercel.com/).
2. Install the Vercel CLI globally:
   ```bash
   npm i -g vercel
   ```
3. Run the Vercel command in your project directory:
   ```bash
   vercel
   ```
4. Follow the prompts to configure your deployment. Vercel will automatically detect your Next.js app and set up the environment.

5. After the deployment is complete, Vercel will provide a URL where your application is hosted.

Enjoy your new site! For more information, check the Vercel [documentation](https://vercel.com/docs/).