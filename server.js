/**
 * SMM Panel Express Server
 * A simplified Node.js/Express application with Twig templating
 */

const express = require('express');
const path = require('path');
const Twig = require('twig');
const config = require('./config/app');
const { renderWithLayout } = require('./utils/helpers');

// Import routes
const indexRoutes = require('./routes/index');
const ordersRoutes = require('./routes/orders');

// =============================================================================
// APP SETUP
// =============================================================================
const app = express();

// Configure Twig
app.set('view engine', 'twig');
app.set('views', config.views);
Twig.cache(false);
app.set('view cache', false);

// =============================================================================
// MIDDLEWARE
// =============================================================================
app.use(express.static(config.static));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// =============================================================================
// ROUTES
// =============================================================================
app.use('/', indexRoutes);
app.use('/orders', ordersRoutes);

// =============================================================================
// ERROR HANDLING
// =============================================================================
app.use((req, res) => {
  const data = {
    page: { title: 'Page Not Found', description: 'The requested page could not be found' },
    error: { status: 404, message: 'Page not found' }
  };
  res.status(404);
  renderWithLayout(res, 'error', data);
});

app.use((err, req, res, next) => {
  console.error('Server error:', err);
  const data = {
    page: { title: 'Server Error', description: 'An internal server error occurred' },
    error: { status: 500, message: config.env === 'development' ? err.message : 'Internal server error' }
  };
  res.status(500);
  renderWithLayout(res, 'error', data);
});

// =============================================================================
// SERVER START
// =============================================================================
app.listen(config.port, () => {
  console.log('🚀 SMM Panel Server Started');
  console.log(`🌐 Server: http://localhost:${config.port}`);
  console.log(`🔧 Environment: ${config.env}`);
});

// Graceful shutdown
process.on('SIGTERM', () => process.exit(0));
process.on('SIGINT', () => process.exit(0));
