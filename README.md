<div align="center">

# ExamNotes AI

### AI-powered exam preparation and note generation platform.

Generate structured, exam-focused study material with revision points, questions, diagrams, charts, and downloadable PDFs using AI.

**Live Application:** https://ai-exam-notes-generator-ccfh.onrender.com

</div>

## About

ExamNotes AI is a full-stack AI study assistant built for students preparing for exams. Users can sign in with Google, enter a topic, class or academic level, and exam type, and generate personalized study material using Google Gemini.

The application combines AI generation with authentication, a credit-based usage system, persistent note history, PDF generation, and Stripe-powered payments for purchasing additional credits.

## Features

* Google authentication with protected user routes
* AI-generated exam-focused notes using Gemini
* Detailed notes and concise revision modes
* Topic importance and prioritized sub-topics
* Short-answer and long-answer questions
* Revision points for quick preparation
* Optional Mermaid diagrams
* Recharts-based visualizations
* Persistent note history using MongoDB
* Downloadable PDFs using PDFKit
* Server-side credit validation
* Stripe Checkout for purchasing additional credits
* Stripe webhook-based payment verification
* Responsive React interface

## How It Works

```text
Google Sign In
      ↓
Enter Topic and Preferences
      ↓
Check Available Credits
      ↓
Build AI Prompt
      ↓
Generate Structured Content with Gemini
      ↓
Save Notes to MongoDB
      ↓
Deduct Credits
      ↓
View, Revisit or Download Notes
```

New users receive **50 credits**, and each note generation consumes **10 credits**.

## AI-Generated Content

Gemini generates structured content designed specifically for exam preparation, including:

* Important concepts and prioritized sub-topics
* Detailed explanations
* Concise revision notes
* Short-answer questions
* Long-answer questions
* Mermaid diagram data
* Chart data for visual summaries

The response is generated in a structured format so the frontend can reliably render different types of content.

## Stripe Payments

Stripe is integrated to allow users to purchase additional credits when their free credits are exhausted.

```text
Select Credit Pack
       ↓
Backend Creates Checkout Session
       ↓
Stripe Checkout
       ↓
Payment Completed
       ↓
Stripe Webhook
       ↓
Payment Verified
       ↓
Credits Added to Account
```

The backend handles Stripe Checkout Session creation and webhook verification. Stripe secret keys are kept server-side and are never exposed to the frontend.

## Authentication and Security

* Google Sign-In through Firebase
* JWT-based authentication
* HTTP-only authentication cookies
* Protected API routes
* User-specific note access
* Server-side credit validation
* Environment variables for API and payment secrets

## Technology Stack

**Frontend**

React, Vite, Tailwind CSS, Redux, Axios, Firebase Authentication, Mermaid, Recharts

**Backend**

Node.js, Express.js, MongoDB, Mongoose, JWT, Google Gemini API, PDFKit

**Payments**

Stripe Checkout, Stripe Webhooks

**Deployment**

Render, MongoDB Atlas

## Production

The application is deployed on Render with separate frontend and backend services.

The production setup includes:

* React frontend
* Express.js backend
* MongoDB Atlas
* Google Gemini API
* Firebase Authentication
* Stripe payment integration
* Environment-based configuration

## Future Improvements

* Automated backend and API testing
* Rate limiting and stronger request validation
* Stripe webhook idempotency
* Streaming AI generation
* Improved AI response validation
* Background processing for longer generations

## Author

Built as a full-stack GenAI project demonstrating practical experience with AI integration, backend development, authentication, MongoDB, payment processing, and production deployment.

