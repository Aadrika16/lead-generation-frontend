# 🧲 Lead Generation System with Email Notifications & n8n Automation

A simple full-stack project that collects lead data from users, processes it via a backend API, and triggers an n8n automation to send email notifications to the sales team.

---

## 📌 Features

- Clean and responsive lead capture form
- Real-time validation for required fields
- Backend API that validates and forwards leads
- n8n automation to send lead notification emails
- Optional lead data storage (Google Sheets, Airtable, etc.)
- Easy to deploy and extend

---

## 🛠 Tech Stack

| Layer      | Technology       |
|------------|------------------|
| Frontend   | React |
| Backend    | Node.js (Express)  |
| Automation | [n8n](https://n8n.io/) |
| Email      |  SMTP |
| Hosting    | Netlify (frontend), Render (backend), n8n Cloud  |

---

## 🎯 Project Structure

---

## 📥 1. Frontend - Lead Generation Form

### ✅ Features

- Fields: Name (required), Email (required), Company (optional), Message (optional)
- Client-side validation for name and email
- Clean UI and responsive layout

### ▶️ How to Run

```bash
cd client
npm install
npm run dev

