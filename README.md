# ConnectNow — Deploy Guide

## Files Structure
```
connectnow/
├── server.js          ← Backend (Node.js + Socket.io)
├── package.json       ← Dependencies
├── public/
│   └── index.html     ← Frontend (full app)
└── README.md          ← This file
```

---

## STEP 1 — GitHub Account Banao (FREE)

1. **github.com** par jao
2. **Sign Up** karo (free)
3. Email verify karo

---

## STEP 2 — New Repository Banao

1. GitHub mein **"New"** button dabao (green)
2. Repository name: `connectnow`
3. **Public** select karo
4. **"Create repository"** dabao

---

## STEP 3 — Files Upload Karo

1. Repository page par **"uploading an existing file"** click karo
2. Yeh 3 files upload karo:
   - `server.js`
   - `package.json`
   - `public/index.html` (pehle public folder banao)
3. **"Commit changes"** dabao

---

## STEP 4 — Firebase Setup (Google Login ke liye)

1. **console.firebase.google.com** par jao
2. **"Create a project"** → name: `connectnow`
3. Left menu → **Authentication** → **Get started**
4. **Google** enable karo → Save
5. **Phone** enable karo → Save
6. Left menu → **Project Settings** (gear icon)
7. **"Add app"** → Web `</>`
8. App nickname: `connectnow-web`
9. **Firebase config copy karo** — kuch aisa dikhega:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "connectnow-xxxxx.firebaseapp.com",
  projectId: "connectnow-xxxxx",
  storageBucket: "connectnow-xxxxx.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
```

10. `public/index.html` mein **line ~230** par yeh config paste karo
    (jahan likha hai `YOUR_API_KEY` etc.)

---

## STEP 5 — Render.com Deploy

1. **render.com** par jao → Sign up (GitHub se)
2. **"New Web Service"** click karo
3. GitHub repository **connectnow** select karo
4. Settings:
   - **Name:** connectnow
   - **Runtime:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Plan:** Free
5. **"Create Web Service"** dabao
6. 2-3 minute wait karo
7. Aapko milega: `https://connectnow-xxxx.onrender.com` ✅

---

## STEP 6 — Firebase Authorized Domain Add Karo

1. Firebase Console → Authentication → Settings → **Authorized domains**
2. **"Add domain"** → paste karo: `connectnow-xxxx.onrender.com`
3. Save

---

## Payment Integration (Stripe — Real Paise)

Subscription feature ke liye Stripe lagao:

1. **stripe.com** → Sign up (free)
2. Dashboard → **Products** → Add subscription plans
3. Weekly: $1.99, Monthly: $4.99, Yearly: $29.99
4. **Publishable key** copy karo
5. `index.html` mein subscribe() function mein Stripe checkout add karo

```javascript
// subscribe() function mein add karo:
const stripe = Stripe('pk_live_YOUR_KEY');
stripe.redirectToCheckout({ priceId: 'price_XXXXX' });
```

Paise direct aapke Stripe account mein jayenge.
Pakistan mein Stripe ke liye **Payoneer** account use karo.

---

## App Features Summary

| Feature | Free | Premium |
|---------|------|---------|
| Video Chat | ✅ | ✅ |
| Audio Chat | ✅ | ✅ |
| Text Chat | ✅ | ✅ |
| Random Match | ✅ | ✅ |
| Gender Filter | ❌ | ✅ |
| Country Filter | ❌ | ✅ |
| Priority Match | ❌ | ✅ |

---

## Support
Koi masla ho toh Claude se poochein!
