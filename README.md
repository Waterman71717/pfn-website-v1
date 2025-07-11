# Process-First Network (PFN) Website

A comprehensive, responsive single-page website for Process-First Network, empowering startups to scale smart with proven process strategies.

## 🚀 Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Next.js 15** - Latest App Router with Server Components
- **Airtable Integration** - Complete lead management system
- **Interactive Elements** - Process assessment, resource downloads, consultation booking
- **SEO Optimized** - Complete metadata and structured data
- **Performance Optimized** - Image optimization, lazy loading, code splitting

## 📊 Airtable Tables

### Required Tables:
1. **Community_Signups** - Name, Email, Signup Date, Source, Status, Lead Score
2. **Newsletter_Subscribers** - Email, Subscription Date, Source, Status, Lead Score, Subscription Type
3. **Feedback** - Name, Email, Message, Submission Date, Source, Status, Response Required, Lead Score
4. **Resource_Downloads** - Email, Resource, Resource Type, Download Date, Source, Lead Score, Engagement Level
5. **Process_Assessments** - Email, Score, Maturity Level, Assessment Date, Answers, Source, Follow Up Required, Lead Score, Priority
6. **Consultations** - Name, Email, Company, Startup Stage, Main Challenge, Preferred Time, Message, Request Date, Status, Source, Priority, Lead Score

## 🔧 Setup

1. **Clone and Install**
   \`\`\`bash
   npm install
   \`\`\`

2. **Environment Variables**
   \`\`\`bash
   cp .env.local.example .env.local
   # Add your Airtable credentials
   \`\`\`

3. **Run Development Server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Build for Production**
   \`\`\`bash
   npm run build
   npm start
   \`\`\`

## 📱 Sections

- Hero with animated elements
- What Is PFN (4 pillars)
- Stats and social proof
- About the Book with Amazon link
- Podcast spotlight
- Community signup
- About Emmanuel Bakare
- Testimonials
- Process benefits
- Tools & resources with downloads
- Interactive process assessment
- Free consultation booking
- FAQ section
- Feedback form
- Newsletter signup
- Final CTA
- Complete footer

## 🎨 Brand Colors

- **Navy Blue**: #0D1A2B (Primary background)
- **Gold**: #F4B731 (Accent color)
- **White**: #FFFFFF (Text and contrast)

## 📈 Lead Scoring System

- Newsletter: 15 points
- Community Signup: 25 points
- Resource Download: 10-25 points (based on type)
- Assessment: 35-55 points (based on level)
- Consultation: 20-60 points (based on stage)
- Feedback: 20 points

## 🚀 Deployment

Ready for deployment on Vercel, Netlify, or any Next.js hosting platform.

## 📞 Contact

Emmanuel Bakare - hello@startupprocessimprovement.com
