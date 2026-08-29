# NovaVest Capital — Frontend Prototype

Premium, modern financial investment website prototype for a **fictional** company focused on investment-management education and presentation of cryptocurrency and technology equity opportunities (including Tesla / TSLA).

## Important

- This is a **static frontend prototype only**.
- All portfolio balances, transactions, charts, and account data are **DEMO / ILLUSTRATIVE**.
- No real authentication, payments, KYC, or trading occurs.
- Do **not** claim SEC/FINRA/FCA registration, FDIC/SIPC protection, or any license unless verified information is supplied.
- Replace all fee, legal, and regulatory placeholders before any production use.
- Connect to legitimate backend services for auth, KYC, market data, custody, and payments when building a real product.

## Structure

```
novavest-capital/
├── index.html              # Home
├── css/styles.css          # Theme, glassmorphism, components
├── js/main.js              # Nav, registration steps, demo chart
├── pages/
│   ├── about.html
│   ├── investments.html
│   ├── strategies.html
│   ├── dashboard.html      # Customer demo dashboard
│   ├── login.html
│   ├── register.html       # Multi-step signup flow
│   ├── fees.html
│   ├── deposit.html        # Deposit / withdraw demo UI
│   ├── admin.html          # Admin demo interface
│   ├── market-insights.html
│   ├── referral.html
│   ├── support.html
│   ├── faq.html
│   ├── landing.html        # Ad campaign landing page
│   ├── terms.html
│   ├── privacy.html
│   ├── risk-disclosure.html
│   ├── crypto-risk.html
│   └── aml-kyc.html
└── README.md
```

## Design

- Dark navy / charcoal background, white typography
- Blue & emerald accents
- Glassmorphism cards
- Inter font, rounded controls
- Mobile-first responsive layout
- Sticky header + mobile menu

## How to view

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Live

Deployed via Vercel from this repository.

## Next steps for production

1. Insert verified regulatory / licensing text.
2. Replace fee schedule with actual fees.
3. Draft full legal documents with counsel.
4. Integrate backend: auth, KYC, market APIs, portfolio, payments.
5. Add HTTPS, 2FA, audit logging, rate limiting, fraud monitoring.
6. Ensure geo-compliance and product availability rules.

© 2026 NovaVest Capital — Prototype only.
