# VanceKirk Store — 2028

> **Official merch & support store for the VanceKirk 2028 movement.**  
> Bold. American. Colorful. Limited drops.

![VanceKirk Store](https://img.shields.io/badge/VanceKirk-2028-CC0000?style=for-the-badge&logo=data:image/svg+xml;base64,...)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📦 What's in this repo

```
vancekirk-store/
├── index.html          # Homepage — hero, categories, products, countdown
├── shop.html           # Full product catalog with filter system
├── drops.html          # Exclusive limited drops with countdowns
├── about.html          # Mission, values, impact stats
├── css/
│   └── style.css       # Full design system (variables, components, responsive)
├── js/
│   └── main.js         # Countdown timer, cart toast, filters, scroll animations
└── README.md
```

---

## 🎨 Design System

| Property | Value |
|---|---|
| Primary Red | `#CC0000` |
| Patriot Blue | `#003399` |
| Gold Accent | `#FFD700` |
| Display Font | Bebas Neue |
| Headline Font | Barlow Condensed |
| Body Font | Barlow |

**Vibe:** Colorful, loud, hype-culture patriotism. Bold typography, animated elements, live countdown timers.

---

## 🚀 Getting Started

### Run locally
```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/vancekirk-store.git
cd vancekirk-store

# Open with any local server (e.g. VS Code Live Server)
# Or just open index.html directly in a browser
open index.html
```

### Deploy to GitHub Pages
```bash
# In your GitHub repo settings → Pages → Deploy from branch → main → / (root)
# Your site will be live at: https://YOUR_USERNAME.github.io/vancekirk-store
```

### Deploy to your domain (vancekirkstore.com)
1. Build/upload files to your hosting provider (Netlify, Vercel, or any web host)
2. Point your domain's DNS A-record to your host's IP
3. Add SSL certificate (most hosts do this automatically)

---

## 🛒 Adding E-Commerce

This is a **frontend-only** starter. To add real purchases, integrate one of:

### Option A — Shopify (Recommended for merch)
- Create a Shopify store
- Use [Shopify Buy Button](https://www.shopify.com/buy-button) to embed products
- Replace `.add-btn` click handlers with Shopify cart JS

### Option B — Stripe
```bash
npm install stripe
```
- Use [Stripe Checkout](https://stripe.com/docs/checkout) for one-click payments
- Add serverless functions (Netlify Functions / Vercel Edge) for backend

### Option C — Gumroad (Best for digital products)
- Upload digital products to Gumroad
- Replace download buttons with Gumroad overlay links

---

## 📧 Newsletter / Email Collection

Replace the newsletter form action with your email provider:

### Mailchimp
```html
<form action="https://YOUR_MAILCHIMP_URL" method="POST">
  <input type="email" name="EMAIL" placeholder="your@email.com" />
  <button type="submit">Join the Movement</button>
</form>
```

### ConvertKit / Kit
```html
<form action="https://app.convertkit.com/forms/YOUR_FORM_ID/subscriptions" method="POST">
  <input type="email" name="email_address" />
  <button type="submit">Join the Movement</button>
</form>
```

---

## 📱 Pages

| Page | URL | Purpose |
|---|---|---|
| Homepage | `/` | Hero, categories, featured products, drop countdown |
| Shop | `/shop.html` | Full catalog with category filters |
| Drops | `/drops.html` | Exclusive limited edition releases |
| About | `/about.html` | Mission, values, impact stats, legal disclosures |

---

## 🔧 Customization

### Change countdown target date
In `js/main.js`, find `initCountdown()` and update the drop date:
```javascript
const dropDate = new Date('2028-01-15T12:00:00'); // Set your real drop date
```

### Add a product
Copy a `.product-card` block in `shop.html` and update:
- `data-cat` attribute (apparel / accessories / drops / digital)
- Product name, description, price
- Background gradient in `.product-img`

### Update social links
Find `.socials` in the footer and replace `href="#"` with your real URLs.

---

## 🌐 Recommended Stack for Production

| Need | Tool |
|---|---|
| Hosting | Netlify (free tier) or Vercel |
| E-commerce | Shopify or Stripe |
| Email list | Klaviyo or Mailchimp |
| Analytics | Google Analytics 4 |
| CMS (for blog) | Contentful or Sanity.io |
| SMS alerts | Twilio or Klaviyo SMS |

---

## 📋 Legal Notes

> This store is operated by independent supporters of VanceKirk 2028.  
> Not affiliated with any official campaign committee.  
> Review FEC guidelines for political merchandise in your state.  
> Consult a campaign finance attorney before launch.

---

## 📄 License

MIT — fork it, build on it, win with it.

---

*Built with ❤️ and 🇺🇸 for the movement.*
