# Portfolio Website

My personal portfolio website built with Next.js and Tailwind CSS.

## Features
- Modern and responsive design
- Dark theme
- Interactive UI elements
- Contact form with EmailJS integration
- Project showcase
- Skills display
- About section
- Social media links

## Tech Stack
- Next.js
- React
- Tailwind CSS
- EmailJS
- React Icons
- React Fast Marquee
- React Toastify

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/AKSHAYKM0077/portfolio.git
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Fill in your EmailJS credentials:
     ```
     NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
     NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
     NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
     ```

4. Set up personal data:
   - Copy `utils/data/personal-data.example.js` to `utils/data/personal-data.js`
   - Update the personal information in `personal-data.js` with your details
   - Add your profile image to the `public` folder

5. Run the development server:
```bash
npm run dev
```

## Important Notes
- Never commit `.env.local` or `personal-data.js` to version control
- Keep your personal data and environment variables private
- Use the example files as templates for your own data

## License
MIT License
