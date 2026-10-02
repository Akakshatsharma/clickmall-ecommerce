# ClickMall

## Copyright Notice

**Copyright © 2026 Akshat Sharma. All rights reserved.**

ClickMall is a full-stack e-commerce application developed by Akshat Sharma.

The source code, application architecture, user interface implementation,
database structure, API implementation, documentation, and other original
materials contained in this project are proprietary.

### Usage Restrictions

This repository and its contents are provided for portfolio and demonstration
purposes.

Unauthorized copying, reproduction, modification, redistribution, publication,
commercial use, or reuse of this project or substantial portions of its source
code is prohibited without prior written permission from the copyright holder.

For permission to use or reuse any part of this project, please contact the
copyright holder.

See the `LICENSE` file for the complete ownership and usage terms.

---

## Project Overview

ClickMall is a full-stack e-commerce application. A React single-page app talks
to a Django REST Framework API over JSON, authenticated with JWT.

**Currently implemented**

- User registration and login (email + password, JWT access/refresh tokens)
- Product listing and product detail pages
- Per-user shopping cart (add, change quantity, remove)
- Checkout with a shipping address and order placement
- Order history and order details
- User dashboard and profile settings
- Order confirmation email
- Django admin for managing products and orders

## Technology Stack

**Backend:** Python, Django 5.2, Django REST Framework, SimpleJWT,
PostgreSQL (SQLite for local development), Gunicorn, WhiteNoise,
django-storages + AWS S3

**Frontend:** React 19, Vite, React Router, Axios, Bootstrap / React-Bootstrap,
Lucide React, React Toastify

## Project Structure

```text
clickmall-ecommerce/
├── backend-drf/          # Django project
│   ├── clickmart_main/   # settings, root URLs, WSGI/ASGI
│   ├── api/              # versioned URL routing (/api/v1/)
│   ├── users/            # custom User model, register, profile
│   ├── products/         # Product model and read-only API
│   ├── carts/            # Cart and CartItem
│   ├── orders/           # Order, OrderItem, order placement
│   ├── requirements.txt
│   ├── build.sh
│   └── .env.example
├── frontend/             # React + Vite app
│   ├── src/
│   └── .env.example
├── .gitignore
├── LICENSE
└── README.md
```

## Local Setup

Prerequisites: Python 3.10+ (Django 5.2 requirement), Node.js 20.19+ (Vite 7 requirement) and npm.

### Backend

```bash
cd backend-drf
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt

cp .env.example .env            # then edit .env (see comments inside)
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API is served at `http://127.0.0.1:8000/api/v1/` and the Django admin at
`http://127.0.0.1:8000/admin/`.

With `DATABASE_URL` left empty the backend uses a local `db.sqlite3` file.

Note: product images are currently stored in AWS S3, so the `AWS_*` variables
in `.env` must be set to upload images through the admin.

### Frontend

```bash
cd frontend
npm install
cp .env.example .env            # defaults point at the local backend
npm run dev
```

The app runs at `http://localhost:5173`.

### Environment variables

Each app has a documented `.env.example`. Copy it to `.env` and fill in values.
Real `.env` files are git-ignored and must never be committed.

| File | Purpose |
|------|---------|
| `backend-drf/.env.example` | Django secret key, debug flag, allowed hosts, database, email, S3 |
| `frontend/.env.example` | `VITE_SERVER_BASE_URL`, the API base URL |

## License

All rights reserved. See `LICENSE`.
