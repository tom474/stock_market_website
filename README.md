# Signalist – AI-Powered Stock Market App

A modern, AI-powered stock market web application built with **Next.js**, **Shadcn**, **Better Auth**, and **Inngest**. Signalist allows users to track real-time stock prices, set personalized alerts, explore detailed company insights, and manage their watchlists. The admin dashboard enables managing stocks, publishing news, and monitoring user activity, while event-driven workflows automate alerts, AI-driven daily digests, earnings notifications, and sentiment analysis — perfect for developers who want a dynamic, real-time financial platform.

If you're getting started and need assistance or face any bugs, join our active **Discord community** with over **50k+ members** — a great place where developers help each other out.

## Tech Stack

- **Next.js** – A React framework for building fast, scalable web apps with SSR and API routes.  
- **TypeScript** – Adds static typing for improved code quality and maintainability.  
- **Tailwind CSS** – Utility-first CSS framework for rapid, responsive UI development.  
- **Shadcn** – Customizable, accessible React component library for modern interfaces.  
- **Better Auth** – Framework-agnostic authentication and authorization library supporting email, social, and multi-factor login.  
- **Inngest** – Event-driven workflow platform for automated alerts, notifications, and AI-powered tasks.  
- **MongoDB** – Flexible NoSQL database for scalable, JSON-like document storage.  
- **Finnhub API** – Real-time financial data API for stock, forex, and crypto market data.  
- **Nodemailer** – Node.js library for sending emails and notifications reliably.  
- **CodeRabbit** – AI-powered GitHub code review assistant ensuring consistent code quality.

## Features

- **Stock Dashboard**: Track real-time stock prices with interactive charts and filter by industry, performance, or market cap.  
- **Powerful Search**: Quickly find stocks using an intelligent search system.  
- **Watchlist & Alerts**: Create personalized watchlists, set alerts, and receive instant email notifications.  
- **Company Insights**: Access detailed financial data, analyst ratings, and sentiment analysis.  
- **Real-Time Workflows**: Automate processes like price updates, report generation, and AI-driven insights via Inngest.  
- **AI-Powered Alerts & Summaries**: Get personalized market summaries, daily digests, and earnings notifications.  
- **Customizable Notifications**: Fine-tune alerts based on preferences and watchlists.  
- **Analytics & Insights**: Understand user behavior, stock trends, and engagement metrics for data-driven decisions.  

## Quick Start

> Follow these steps to set up the project locally on your machine.

Clone the repository

```bash
git clone https://github.com/adrianhajdin/signalist_stock-tracker-app.git
```

Navigate to the project directory

```bash
cd signalist_stock-tracker-app
```

Create `.env` file in the root folder and set up environment variables

```
NODE_ENV='development'
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# FINNHUB
NEXT_PUBLIC_NEXT_PUBLIC_FINNHUB_API_KEY=
FINNHUB_BASE_URL=https://finnhub.io/api/v1

# MONGODB
MONGODB_URI=

# BETTER AUTH
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000

# GEMINI
GEMINI_API_KEY=

# NODEMAILER
NODEMAILER_EMAIL=
NODEMAILER_PASSWORD=
```

Replace the placeholder values with your real credentials. You can get these by signing up at: [**MongoDB**](https://www.mongodb.com/products/platform/atlas-database), [**Gemini**](https://aistudio.google.com/prompts/new_chat?utm_source=chatgpt.com), [**Inngest**](https://jsm.dev/stocks-inggest), [**Finnhub**](https://finnhub.io).

Install dependencies

```bash
npm install
```

Start the application
```bash
npm run dev
npx inngest-cli@latest dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.