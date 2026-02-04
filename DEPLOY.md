# 🚀 DEPLOYMENT GUIDE - Method Dumpsters Website

## Quick Start (5 Minutes)

### Step 1: Replace Placeholders

**CRITICAL - Do this first or the site won't work!**

Open each file and replace:
- `[PHONE]` → Your phone number (e.g., 555-123-4567)
- `[TEXT NUMBER]` → Your text number
- `[EMAIL]` → Your email
- `[PRICE]` → Your actual prices

**Files to update:**
1. All component files in `/components/`
2. All page files in `/app/`
3. Search entire project for `[PHONE]`, `[TEXT NUMBER]`, `[EMAIL]`, `[PRICE]`

### Step 2: Add Your Logo & Favicon

1. Save your logo as `/public/logo.png`
2. Save your favicon as `/public/favicon.ico`
3. Update Header.tsx if you want to use actual logo image instead of "M" placeholder

### Step 3: Deploy to Vercel

**Option A - GitHub (Recommended):**
1. Create a GitHub repository
2. Push your code:
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   \`\`\`
3. Go to [vercel.com/new](https://vercel.com/new)
4. Import your GitHub repository
5. Click "Deploy" (Vercel auto-detects Next.js)
6. Done! Your site is live.

**Option B - Vercel CLI:**
\`\`\`bash
npm install -g vercel
cd method-dumpsters
vercel --prod
\`\`\`

## 📝 Customization Checklist

### Essential Updates:
- [ ] Replace all `[PHONE]` placeholders
- [ ] Replace all `[TEXT NUMBER]` placeholders  
- [ ] Replace all `[EMAIL]` placeholders
- [ ] Update pricing in `/app/pricing/page.tsx`
- [ ] Update service areas in `/app/service-area/page.tsx`
- [ ] Add your logo to `/public/logo.png`
- [ ] Add your favicon to `/public/favicon.ico`

### Optional Updates:
- [ ] Customize brand colors in `tailwind.config.js`
- [ ] Update business hours in Contact.tsx
- [ ] Add real customer reviews in Trust.tsx
- [ ] Customize FAQ answers
- [ ] Add Google Analytics tracking code
- [ ] Update meta descriptions for SEO

## 🔧 Advanced Features

### Email Form Automation

The contact form currently uses SMS. To automate with email:

**1. Install Resend (recommended):**
\`\`\`bash
npm install resend
\`\`\`

**2. Create API route** at `/app/api/contact/route.ts`:
\`\`\`typescript
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();
  
  try {
    await resend.emails.send({
      from: 'contact@yourdomain.com',
      to: 'your@email.com',
      subject: 'New Quote Request from Method Dumpsters',
      html: \`
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> \${data.name}</p>
        <p><strong>Phone:</strong> \${data.phone}</p>
        <p><strong>Email:</strong> \${data.email}</p>
        <p><strong>Material Type:</strong> \${data.materialType}</p>
        <p><strong>Message:</strong> \${data.message}</p>
      \`
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
\`\`\`

**3. Update Contact.tsx** to use the API instead of SMS.

**4. Add environment variable:**
Create `.env.local`:
\`\`\`
RESEND_API_KEY=your_api_key_here
\`\`\`

### SMS Notifications with Twilio

**1. Install Twilio:**
\`\`\`bash
npm install twilio
\`\`\`

**2. Add to API route:**
\`\`\`typescript
import twilio from 'twilio';

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

await client.messages.create({
  body: \`New quote from \${data.name}: \${data.phone}\`,
  from: process.env.TWILIO_PHONE,
  to: 'YOUR_PHONE_NUMBER'
});
\`\`\`

### Google Analytics

Add to `app/layout.tsx` in the `<head>`:
\`\`\`typescript
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script dangerouslySetInnerHTML={{
  __html: \`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  \`
}} />
\`\`\`

## 🐛 Common Issues

**"Module not found" error:**
\`\`\`bash
rm -rf node_modules package-lock.json
npm install
\`\`\`

**Styles not loading:**
\`\`\`bash
rm -rf .next
npm run dev
\`\`\`

**TypeScript errors:**
\`\`\`bash
npm run build
# Fix any errors shown
\`\`\`

## 📊 Performance Tips

1. **Optimize images:** Use WebP format for logo
2. **Add caching:** Vercel handles this automatically
3. **Monitor Core Web Vitals:** Use Google PageSpeed Insights
4. **Enable compression:** Automatic on Vercel

## 🔐 Security

1. Never commit API keys to GitHub
2. Use environment variables for secrets
3. Add `.env.local` to `.gitignore`
4. Validate all form inputs server-side

## 📱 Testing

**Before going live:**
- [ ] Test all call/text links on mobile
- [ ] Test contact form submission
- [ ] Check all pages on mobile devices
- [ ] Verify all links work
- [ ] Test on different browsers (Chrome, Safari, Firefox)
- [ ] Check page speed with PageSpeed Insights

## 🚀 Going Live

1. Deploy to Vercel (get a .vercel.app URL)
2. Test thoroughly on the live URL
3. Add your custom domain in Vercel dashboard
4. Update DNS records to point to Vercel
5. SSL is automatic (handled by Vercel)

## 📞 Need Help?

- Next.js issues: https://github.com/vercel/next.js/discussions
- Vercel deployment: https://vercel.com/docs
- Tailwind CSS: https://tailwindcss.com/docs

---

**Your website is ready to beat the competition!** 🎉

Focus on:
1. Fast loading ✅
2. Clear CTAs ✅
3. Mobile-first ✅
4. Simple pricing ✅
5. Trust signals ✅

Good luck with Method Dumpsters! 🚛
