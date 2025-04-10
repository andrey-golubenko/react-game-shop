# React Game Shop - E-commerce Gaming Platform

<div align="center">
  <img src="https://img.shields.io/badge/React-17.0.2-blue?logo=react" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-4.3.5-blue?logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/MaterializeCSS-1.0.0-blue?logo=material-design" alt="Materialize CSS">
</div>

## 🌍 Demo

Experience the React Game Shop in action:

- **Live Demo**: [react-game-shop](https://andrey-golubenko.github.io/react-game-shop/)

## 📌 Core Features

- **Modern e-commerce platform for gaming items**
- **Shopping cart functionality**
  - Add/remove items
  - Adjust quantities
  - Real-time total calculation
- **Product catalog with lazy loading**
  - Progressive image loading
  - Intersection Observer implementation
- **Responsive Material Design**
  - Mobile-friendly interface
  - Toast notifications
  - Modal dialogs

## 🛠️ Project Features

### ➤ Technology Stack

- **[React 17](https://reactjs.org/)** - for building the user interface
- **[TypeScript](https://www.typescriptlang.org/)** - for type safety
- **[MaterializeCSS](https://materializecss.com/)** - for responsive design components
- **React Context + Reducer** - for state management
- **Custom Hooks** - for reusable logic
  - useOnScreen - for intersection observer
- **SVG Components** - for icons and graphics

### ➤ Project Structure

```plaintext
react-game-shop/
├── src/
│   ├── components/         # React components
│   │   ├── BasketItem/    # Shopping cart item component
│   │   ├── BasketList/    # Shopping cart list
│   │   ├── Cart/          # Cart icon and counter
│   │   ├── GoodsItem/     # Product card component
│   │   ├── GoodsList/     # Product list container
│   │   ├── Header/        # App header
│   │   ├── Footer/        # App footer
│   │   ├── LoadableImage/ # Lazy loading image component
│   │   ├── Preloader/     # Loading indicator
│   │   ├── Shop/          # Main shop container
│   │   └── Tooltip/       # Notification component
│   ├── hooks/             # Custom React hooks
│   ├── static/            # Static assets
│   ├── interfaces.tsx     # TypeScript interfaces
│   ├── ShopContext.tsx    # Context provider
│   ├── shopReducer.ts     # State reducer
│   └── constants.tsx      # Constants and action types
├── public/                # Public assets
└── package.json          # Project dependencies
```

## 🚀 Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-game-shop.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## 🔧 Required Environment Variables

Create a `.env` file in the root directory with:

```bash
REACT_APP_API_KEY="your_fortnite_api_key"
```

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.