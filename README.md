# 🚀 Manula Kavinda -  Portfolio

A stunning, portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, and modern UI/UX principles.

![Portfolio Preview](https://via.placeholder.com/800x400/3b82f6/ffffff?text=Portfolio+Preview)

## ✨ Features

### 🎨 **Modern Design**

-    **Aesthetics** with clean, minimalist design
-    **Glass morphism effects** and backdrop blur
-    **Smooth animations** powered by Framer Motion
-    **Dark/Light mode** support with automatic theme switching
-    **Responsive design** that works on all devices

### 🚀 **Performance Optimized**

-    **Fast loading** with Next.js 14 App Router
-    **Optimized images** and lazy loading
-    **SEO ready** with proper meta tags
-    **Core Web Vitals** optimized
-    **Hydration-safe** components

### 📱 **Complete Sections**

-    **Hero Section** - Eye-catching introduction with animated background
-    **About Section** - Professional background with statistics
-    **Experience Section** - Detailed work history with achievements
-    **Projects Section** - Interactive project showcase
-    **Skills Section** - Animated skill progress bars
-    **Contact Section** - Contact form and information
-    **Footer** - Links and social media

### 🛠️ **Technical Stack**

-    **Next.js 14** with App Router
-    **TypeScript** for type safety
-    **Tailwind CSS** for styling
-    **Framer Motion** for animations
-    **Lucide React** for icons
-    **Radix UI** components for accessibility

## 🏃‍♂️ Quick Start

### Prerequisites

-    Node.js 18+
-    npm, yarn, or pnpm

### Installation

1. **Clone the repository**

     ```bash
     git clone <your-repo-url>
     cd portfolio
     ```

2. **Install dependencies**

     ```bash
     npm install
     # or
     yarn install
     # or
     pnpm install
     ```

3. **Run the development server**

     ```bash
     npm run dev
     # or
     yarn dev
     # or
     pnpm dev
     ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Customization Guide

### 📝 **Update Personal Information**

#### 1. **Hero Section** (`src/components/hero-section.tsx`)

```typescript
// Update your name and tagline
<span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800">Manula Kavinda</span>
```

#### 2. **About Section** (`src/components/about-section.tsx`)

```typescript
// Update your bio and statistics
const stats = [
	{ icon: Code, label: 'Projects Completed', value: '50+' },
	{ icon: Globe, label: 'Years Experience', value: '5+' },
	// ... customize your stats
];
```

#### 3. **Experience Section** (`src/components/experience-section.tsx`)

```typescript
const experiences = [
	{
		company: 'Your Company',
		position: 'Your Position',
		duration: '2023 - Present',
		location: 'Your Location',
		description: 'Your description',
		technologies: ['React', 'Node.js', 'TypeScript'],
		achievements: ['Achievement 1', 'Achievement 2'],
	},
	// ... add your experiences
];
```

#### 4. **Projects Section** (`src/components/projects-section.tsx`)

```typescript
const projects = [
	{
		title: 'Your Project',
		description: 'Project description',
		technologies: ['Next.js', 'TypeScript', 'Tailwind'],
		liveUrl: 'https://your-project.com',
		githubUrl: 'https://github.com/your-username/project',
		featured: true,
	},
	// ... add your projects
];
```

#### 5. **Skills Section** (`src/components/skills-section.tsx`)

```typescript
const skillCategories = [
	{
		title: 'Frontend Development',
		icon: Code,
		skills: [
			{ name: 'React', level: 95 },
			{ name: 'Next.js', level: 90 },
			// ... customize your skills
		],
	},
	// ... add your skill categories
];
```

#### 6. **Contact Section** (`src/components/contact-section.tsx`)

```typescript
// Update contact information
<p className="text-gray-600 dark:text-gray-300">
  your.email@example.com
</p>
<p className="text-gray-600 dark:text-gray-300">
  +1 (555) 123-4567
</p>
```

### 🎨 **Customize Colors & Styling**

#### Update Tailwind Config (`tailwind.config.ts`)

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: "#3b82f6", // Your primary color
        foreground: "#ffffff",
      },
      // ... customize your color palette
    }
  }
}
```

#### Update Global Styles (`src/app/globals.css`)

```css
:root {
	--background: #ffffff;
	--foreground: #171717;
	/* ... customize your CSS variables */
}
```

### 📸 **Add Your Images**

1. **Place images in `public/` directory**
2. **Update image references in components**
3. **Optimize images for web** (recommended: WebP format)

### 🔗 **Update Social Links**

Update social media links in:

-    Hero section (`src/components/hero-section.tsx`)
-    Contact section (`src/components/contact-section.tsx`)
-    Footer (`src/components/footer.tsx`)

## 🚀 Deployment

### **Vercel (Recommended)**

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### **Netlify**

1. Build the project: `npm run build`
2. Deploy the `out` directory

### **Other Platforms**

The portfolio is compatible with any static hosting platform.

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Main page
│   ├── components/
│   │   ├── ui/                  # Reusable UI components
│   │   │   ├── button.tsx
│   │   │   └── card.tsx
│   │   ├── hero-section.tsx     # Hero section
│   │   ├── navigation.tsx       # Navigation bar
│   │   ├── about-section.tsx    # About section
│   │   ├── experience-section.tsx # Experience section
│   │   ├── projects-section.tsx # Projects section
│   │   ├── skills-section.tsx   # Skills section
│   │   ├── contact-section.tsx  # Contact section
│   │   └── footer.tsx           # Footer
│   └── lib/
│       └── utils.ts             # Utility functions
├── public/                      # Static assets
├── tailwind.config.ts           # Tailwind configuration
└── package.json                 # Dependencies
```

## 🛠️ Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🎨 Design System

### **Colors**

-    **Primary**: Blue (#3b82f6)
-    **Secondary**: Purple (#8b5cf6)
-    **Success**: Green (#10b981)
-    **Warning**: Orange (#f59e0b)
-    **Error**: Red (#ef4444)

### **Typography**

-    **Primary Font**: Geist Sans
-    **Monospace Font**: Geist Mono
-    **Responsive scaling** for all text elements

### **Spacing**

-    **Consistent spacing** using Tailwind's spacing scale
-    **Responsive padding/margins** for all sections

## 🔧 Troubleshooting

### **Hydration Errors**

-    ✅ Fixed with `suppressHydrationWarning`
-    ✅ Proper client-side state management
-    ✅ Consistent server/client rendering

### **Build Issues**

-    Ensure all dependencies are installed
-    Check TypeScript errors
-    Verify import paths

### **Performance Issues**

-    Optimize images
-    Use Next.js Image component
-    Enable compression

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

-    **Next.js** team for the amazing framework
-    **Tailwind CSS** for the utility-first CSS framework
-    **Framer Motion** for smooth animations
-    **Lucide** for beautiful icons
-    **Radix UI** for accessible components

---

**Built with ❤️ by Manula Kavinda**

For questions or support, reach out at [your-email@example.com](mailto:your-email@example.com)
