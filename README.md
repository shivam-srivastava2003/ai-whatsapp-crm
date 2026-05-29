# 🤖 AI WhatsApp CRM

A modern, high-performance Customer Relationship Management (CRM) platform powered by AI, designed specifically for WhatsApp-first businesses. Connect with your customers, automate support/sales, and analyze messaging performance in real-time.

---

## ✨ Key Features

- 📈 **Interactive Analytics Dashboard**: Real-time insights into customer acquisition, response times, message volumes, and sentiment trends using Recharts.
- 🤖 **AI-Powered Inbox & Assistant**: Context-aware auto-replies, smart sentiment analysis, and suggestions to assist agents in handling conversations.
- ⚙️ **Advanced Automation**: Visual workflow builder for WhatsApp auto-responses, follow-ups, and interactive menus.
- 👥 **Lead & Contact Management**: Detailed contact profile sheets with status tracking, tags, notes, and activity history.
- 🔌 **Integrations Hub**: Easy setup for the official WhatsApp Cloud API, HubSpot, Salesforce, and Zapier.
- 📱 **Modern responsive UI**: Fully styled with a custom dark-mode-leaning design system, smooth Framer Motion transitions, and fully responsive layouts.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Frontend**: [React 18](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/) & [PostCSS](https://postcss.org/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📁 Directory Structure

```text
├── src/
│   ├── app/                      # Next.js App Router (pages, layouts)
│   │   ├── dashboard/            # CRM Dashboard section
│   │   │   ├── analytics/        # Performance tracking charts
│   │   │   ├── automation/       # AI workflow editor & rules
│   │   │   ├── inbox/            # Shared team chat inbox
│   │   │   ├── leads/            # Contact list & pipeline management
│   │   │   ├── integrations/     # API, HubSpot, and webhooks setup
│   │   │   └── settings/         # Profile and prompt engineering configuration
│   │   ├── globals.css           # Global Tailwind and font styles
│   │   └── page.tsx              # Public marketing landing page
│   ├── components/               # Shared & feature-specific React components
│   │   ├── dashboard/            # Sidebar, TopBar, Charts, and AI Assistant
│   │   └── landing/              # Hero, Navbar, Features, Pricing, and Footer
│   ├── lib/                      # Mock CRM database, helpers, and utilities
│   └── types/                    # TypeScript interfaces and global declarations
├── tailwind.config.js            # Tailwind theme and custom configuration
└── tsconfig.json                 # TypeScript compiler configuration
```

---

## 🚀 Getting Started

### 📋 Prerequisites

Ensure you have **Node.js** (v18.x or later) and **npm** installed on your system.

### 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shivam-srivastava2003/ai-whatsapp-crm.git
   cd ai-whatsapp-crm
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### 💻 Running Locally

To start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### 🏗️ Building for Production

To build the application for production:

```bash
npm run build
```

To run the production build locally:

```bash
npm start
```

---

## 🔒 Security & Environment Variables

Make sure to create a `.env` file in the root directory for any sensitive keys. A pre-configured `.gitignore` prevents pushing this file or any API credentials to public repositories.

---

## 📄 License

This project is licensed under the [ISC License](LICENSE).
