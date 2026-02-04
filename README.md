# Method Dumpsters Website

A high-converting dumpster trailer rental website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Fast & Mobile-Optimized**: Lightning-fast loading with responsive design
- **High-Converting**: Clear CTAs, sticky header with call/text buttons
- **SEO-Ready**: Meta tags, schema markup, semantic HTML
- **Modern Design**: Bold black/blue theme with smooth animations
- **Contact Integration**: Click-to-call, click-to-text, contact form

## 📋 Before You Deploy

### Replace These Placeholders:

1. **Contact Information** (in all files):
   - `[PHONE]` → Your phone number (e.g., (555) 123-4567)
   - `[TEXT NUMBER]` → Your text number (can be same as phone)
   - `[EMAIL]` → Your email address

2. **Pricing** (in pricing components):
   - `[PRICE]` → Your actual prices
   - `[X]` → Number of days, tons, etc.

3. **Service Areas** (in `/app/service-area/page.tsx`):
   - Update the `serviceAreas` array with your actual cities

4. **Logo**:
   - Add your logo file to `/public/logo.png`
   - Add favicon to `/public/favicon.ico`

## 🛠️ Setup Instructions

### 1. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 2. Update Contact Info

Use Find & Replace in your editor:
- Find: `[PHONE]` → Replace with: Your phone number
- Find: `[TEXT NUMBER]` → Replace with: Your text number  
- Find: `[EMAIL]` → Replace with: Your email

### 3. Add Your Logo

- Place your logo at `/public/logo.png`
- Place your favicon at `/public/favicon.ico`

### 4. Update Pricing

Edit these files and replace pricing placeholders:
- `/components/PricingSnapshot.tsx`
- `/app/pricing/page.tsx`

### 5. Update Service Areas

Edit `/app/service-area/page.tsx` and update the cities list.

## 🚀 Deploy to Vercel

### Option 1: Quick Deploy (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

### Option 2: Vercel CLI

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
\`\`\`

## 💻 Local Development

\`\`\`bash
# Run development server
npm run dev

# Open http://localhost:3000
\`\`\`

## 📱 Contact Form Automation

The contact form currently uses SMS to send inquiries to your phone. When a user submits the form:

1. It opens their SMS app
2. Pre-fills your number and their info
3. They send the text to you

**To fully automate**: Consider integrating:
- **Email service** like SendGrid, Mailgun, or Resend
- **CRM** like HubSpot or Salesforce
- **Twilio** for automated SMS notifications

### Example Email Integration (using Resend):

\`\`\`typescript
// Install: npm install resend

import { Resend } from 'resend';

const resend = new Resend('your_api_key');

await resend.emails.send({
  from: 'contact@methoddumpsters.com',
  to: '[YOUR EMAIL]',
  subject: 'New Quote Request',
  html: \`<p>Name: \${formData.name}</p>...\`
});
\`\`\`

## 📁 File Structure

\`\`\`
method-dumpsters/
├── app/
│   ├── page.tsx              # Home page
│   ├── pricing/page.tsx      # Pricing page
│   ├── service-area/page.tsx # Service area page
│   ├── faq/page.tsx          # FAQ page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Header.tsx            # Sticky header
│   ├── Hero.tsx              # Hero section
│   ├── WhatWeOffer.tsx       # Services section
│   ├── HowItWorks.tsx        # Process section
│   ├── PricingSnapshot.tsx   # Pricing preview
│   ├── WhyChooseUs.tsx       # Benefits section
│   ├── Trust.tsx             # Reviews section
│   ├── FAQ.tsx               # FAQ component
│   ├── Contact.tsx           # Contact form
│   ├── FinalCTA.tsx          # Final CTA
│   └── Footer.tsx            # Footer
├── public/
│   ├── logo.png              # Your logo (ADD THIS)
│   └── favicon.ico           # Your favicon (ADD THIS)
└── package.json
\`\`\`

## 🎨 Customization

### Colors

Edit `tailwind.config.js`:
\`\`\`javascript
colors: {
  'method-blue': '#0052CC',  // Change this
  'method-dark': '#1A1A1A',  // Change this
  'method-gray': '#2C2C2C',  // Change this
}
\`\`\`

### Fonts

Edit `app/globals.css` to change the Google Font:
\`\`\`css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap');
\`\`\`

## 📊 Analytics

Add Google Analytics by editing `app/layout.tsx`:

\`\`\`typescript
<head>
  <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
  <script dangerouslySetInnerHTML={{
    __html: \`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
    \`
  }} />
</head>
\`\`\`

## 🔧 Troubleshooting

**Build fails?**
- Make sure all placeholder values are replaced
- Check for TypeScript errors: `npm run build`

**Styling broken?**
- Clear `.next` folder: `rm -rf .next`
- Reinstall: `npm install`

**Contact form not working?**
- Check that phone numbers are in correct format
- Test SMS links on mobile device

## 📞 Support

Need help? Contact the developer or check:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vercel Docs](https://vercel.com/docs)

## 📄 License

Proprietary - Method Dumpsters © 2024
