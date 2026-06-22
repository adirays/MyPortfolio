# Portfolio Customization Guide

This is a premium two-stage portfolio website with a cinematic landing page and interactive portfolio experience. Here's how to customize it for your personal brand.

## Quick Start Customization

### 1. Personal Information

**Landing Page** (`/src/app/pages/Landing.tsx`):
- Line 37: Replace `"Your Name"` with your actual name
- Line 44: Update `"AI Engineer · Product Builder"` with your title/role

**Portfolio Page** (`/src/app/pages/Portfolio.tsx`):
- Line 161: Update hero title `"Building the Future"`
- Line 165: Update hero description
- Line 216-238: Update "About Me" section content
- Line 481: Update footer text with your name

### 2. Navigation Logo

**Navigation Component** (`/src/app/components/Navigation.tsx`):
- Line 29: Replace `"YN"` with your initials or logo text

### 3. Projects

**Portfolio Page** (`/src/app/pages/Portfolio.tsx`, lines 22-49):

Replace the projects array with your own projects:
```typescript
{
  title: "Project Name",
  subtitle: "Short Description",
  description: "Detailed description of the project...",
  tags: ["Tech1", "Tech2", "Tech3"],
  link: "https://github.com/yourproject", // or "#" for no link
  image: "https://images.unsplash.com/...", // Use unsplash or your own images
}
```

### 4. Experience

**Portfolio Page** (`/src/app/pages/Portfolio.tsx`, lines 52-69):

Update the experiences array with your work history:
```typescript
{
  role: "Job Title",
  company: "Company Name",
  period: "Start Date — End Date",
  description: "What you did and achieved...",
  tags: ["Skill1", "Skill2", "Skill3"],
}
```

### 5. Skills

**Portfolio Page** (`/src/app/pages/Portfolio.tsx`, lines 72-89):

Modify the skillCategories array to reflect your tech stack:
```typescript
{
  category: "Category Name", // e.g., "Frontend", "Backend", "AI/ML"
  skills: ["Skill1", "Skill2", "Skill3"],
}
```

### 6. Contact Information

**Portfolio Page** (`/src/app/pages/Portfolio.tsx`):
- Line 16: Update email address `"your.email@example.com"`
- Line 431: Update email display in the button
- Line 445-447: Update GitHub URL
- Line 451-453: Update LinkedIn URL

### 7. "What I'm Doing Now" Section

**Portfolio Page** (`/src/app/pages/Portfolio.tsx`, lines 384-404):

Update the "Now" section with your current focus and plans.

### 8. Colors & Branding

**Primary Accent Colors** are blue and purple by default. To change them:

**Landing Page** (`/src/app/pages/Landing.tsx`):
- Line 18: Primary gradient orb color
- Line 30: Secondary gradient orb color
- Line 39: Name gradient colors
- Line 56: Button hover gradient

**Portfolio Page** (`/src/app/pages/Portfolio.tsx`):
- Line 102: Progress bar gradient
- Line 113: Background gradient orb (blue)
- Line 124: Background gradient orb (purple)

Search for `blue-` and `purple-` throughout the files to customize accent colors.

### 9. Fonts

**Current fonts**:
- Display (headings): Space Grotesk
- Body (text): Inter

To change fonts, edit `/src/styles/fonts.css`:
```css
@import url('your-google-fonts-url');

:root {
  --font-display: 'Your Display Font', sans-serif;
  --font-body: 'Your Body Font', sans-serif;
}
```

### 10. Images

**Project Images**: Use Unsplash URLs or your own hosted images. Update the `image` property in the projects array.

## Navigation Structure

The portfolio uses React Router with two main routes:
- `/` - Landing page
- `/portfolio` - Full portfolio experience

Users click "Enter Portfolio" on the landing page to transition to the full portfolio.

## Sections Included

The portfolio includes these sections (in order):
1. **Hero** - Main introduction with CTA buttons
2. **About** - Your story and stats
3. **Projects** - Featured work with images
4. **Experience** - Work history timeline
5. **Skills** - Tech stack by category
6. **Now** - Current focus and plans
7. **Contact** - Email and social links

## Animations

The site uses Motion (formerly Framer Motion) for smooth animations:
- Page transitions when navigating
- Scroll-based reveals
- Hover effects on cards and buttons
- Ambient background gradients

All animations are configured for a premium, cinematic feel.

## Responsive Design

The site is fully responsive and optimized for:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)

## Tips for Best Results

1. **Keep project descriptions concise** - 2-3 sentences max
2. **Use high-quality images** - 800px width minimum
3. **Maintain consistent tag formatting** - 3-6 tags per project
4. **Update all placeholder text** - Search for "Your Name", "your.email", etc.
5. **Test on mobile** - The design is mobile-first

## Need Help?

All customization points are clearly marked in the code with placeholder values like "Your Name", "your.email@example.com", etc. Use your editor's search function to find and replace these values quickly.
