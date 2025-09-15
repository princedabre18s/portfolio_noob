# Portfolio Website

A modern, responsive portfolio website built with React to showcase your resume, projects, and skills.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with gradient accents and smooth animations
- **Interactive Navigation**: Smooth scrolling navigation with mobile-friendly hamburger menu
- **Project Showcase**: Dedicated section to display your projects with technology tags
- **Resume Section**: Comprehensive resume with experience, education, and skills
- **Contact Form**: Functional contact form for potential clients/employers
- **Professional Styling**: Modern CSS with gradients, shadows, and hover effects

## Tech Stack

- **React 18**: Modern React with hooks and functional components
- **CSS3**: Custom styling with Flexbox, Grid, and modern CSS features
- **Responsive Design**: Mobile-first approach with media queries
- **ES6+**: Modern JavaScript features

## Project Structure

```
src/
├── components/
│   ├── Header.js & Header.css      # Navigation header
│   ├── About.js & About.css        # About section with skills
│   ├── Projects.js & Projects.css  # Projects showcase
│   ├── Resume.js & Resume.css      # Resume/experience section
│   └── Contact.js & Contact.css    # Contact form and info
├── App.js & App.css                # Main app component
└── index.js & index.css            # App entry point and global styles
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the files
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## Customization Guide

### Personal Information

1. **Header/Navigation**: Update your name in `src/components/Header.js`
2. **About Section**: Modify `src/components/About.js` with your bio and skills
3. **Projects**: Update the projects array in `src/components/Projects.js` with your actual projects
4. **Resume**: Edit `src/components/Resume.js` with your work experience and education
5. **Contact**: Update contact information in `src/components/Contact.js`

### Adding Your Photo

Replace the placeholder in `src/components/About.js`:
```jsx
// Replace this placeholder div
<div className="image-placeholder">
  <p>Your Photo Here</p>
</div>

// With an actual image
<img src="path/to/your/photo.jpg" alt="Your Name" />
```

### Project Images

Add project screenshots by replacing the placeholder in `src/components/Projects.js`:
```jsx
// Update the imageUrl property in the projects array
imageUrl: "path/to/your/project-screenshot.jpg"
```

### Links and URLs

Update all placeholder links (marked with `#`) with your actual:
- GitHub repository URLs
- Live project demos
- Social media profiles
- Resume PDF download link

### Colors and Styling

The design uses a purple gradient theme. To change colors, update the CSS custom properties or gradient values in the respective CSS files.

Main gradient: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`

## Available Scripts

- `npm start`: Runs the development server
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: One-way operation to customize build configuration

## Browser Support

This project supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

You can deploy this portfolio to various platforms:

- **Netlify**: Drag and drop the build folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use the `gh-pages` package
- **Heroku**: Deploy using the Heroku CLI

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Replace with your contact information:
- Email: your.email@example.com
- LinkedIn: your-linkedin-profile
- GitHub: your-github-username

---

**Note**: This portfolio template includes placeholder content. Make sure to replace all placeholder text, images, and links with your actual information before deploying.
