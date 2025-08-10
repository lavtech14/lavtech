# Lavanya's Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Styled Components. This website showcases professional experience, projects, and provides a way for potential clients and employers to get in touch.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Mobile-first approach that works on all devices
- **Smooth Scrolling**: Enhanced user experience with smooth page transitions
- **Interactive Elements**: Hover effects, animations, and interactive components
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Portfolio section with filtering capabilities
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript
- **Styling**: Styled Components
- **Routing**: React Router DOM
- **Build Tool**: Create React App
- **Package Manager**: npm

## 📱 Pages/Sections

1. **Home**: Hero section with introduction and call-to-action buttons
2. **About**: Personal information, skills, experience, and statistics
3. **Portfolio**: Project showcase with filtering by category
4. **Contact**: Contact form and contact information
5. **Footer**: Social media links and additional navigation

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd lavanya-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

To create a production build:

```bash
npm run build
```

The build files will be created in the `build` folder.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Home.tsx        # Home page component
│   ├── About.tsx       # About page component
│   ├── Portfolio.tsx   # Portfolio page component
│   ├── Contact.tsx     # Contact page component
│   └── Footer.tsx      # Footer component
├── App.tsx             # Main app component with routing
├── index.tsx           # Entry point
└── index.css           # Global styles
```

## 🎨 Customization

### Personal Information
Update the following files to customize the content:

- **Header.tsx**: Change the name in the logo
- **Home.tsx**: Update the hero text, title, and description
- **About.tsx**: Modify personal bio, skills, and experience
- **Portfolio.tsx**: Add your own projects to the projects array
- **Contact.tsx**: Update contact information
- **Footer.tsx**: Modify social media links and contact details

### Styling
The website uses Styled Components for styling. You can customize:

- Color scheme: Update the color variables in each component
- Typography: Modify font sizes and weights
- Layout: Adjust spacing and grid layouts
- Animations: Customize keyframes and transitions

### Adding New Pages
To add new pages:

1. Create a new component in the `components` folder
2. Add a route in `App.tsx`
3. Add navigation link in `Header.tsx`

## 📱 Responsive Design

The website is built with a mobile-first approach and includes:

- Responsive grid layouts
- Mobile navigation menu
- Touch-friendly buttons and forms
- Optimized typography for all screen sizes

## 🔧 Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App (not recommended)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please reach out through the contact form on the website or open an issue in the repository.

---

**Built with ❤️ by Lavanya**
