const express = require('express');
const { renderWithLayout, generatePagination } = require('../utils/helpers');
const ordersData = require('../data/orders');

const router = express.Router();

// Base orders page
router.get('/', (req, res) => {
  const status = 'all';
  const page = 1;
  const search = req.query.search || '';
  const searchList = search ? [{ name: 'search', value: search }] : [];
  
  const data = {
    ...ordersData,
    status,
    search,
    searchList,
    pagination: generatePagination(page, ordersData.orderList.length)
  };
  
  renderWithLayout(res, 'orders', data);
});

// Orders filtered by status
router.get('/:status', (req, res) => {
  const status = req.params.status || 'all';
  const page = 1;
  const search = req.query.search || '';
  
  const validStatuses = ['all', 'pending', 'inprogress', 'completed', 'partial', 'processing', 'canceled'];
  if (!validStatuses.includes(status)) {
    return res.status(404).send('Invalid order status');
  }
  
  const searchList = search ? [{ name: 'search', value: search }] : [];
  
  const data = {
    ...ordersData,
    status,
    search,
    searchList,
    pagination: generatePagination(page, ordersData.orderList.length)
  };
  
  renderWithLayout(res, 'orders', data);
});

// Orders with pagination
router.get('/:status/:page', (req, res) => {
  const status = req.params.status || 'all';
  const page = parseInt(req.params.page) || 1;
  const search = req.query.search || '';
  
  const validStatuses = ['all', 'pending', 'inprogress', 'completed', 'partial', 'processing', 'canceled'];
  if (!validStatuses.includes(status)) {
    return res.status(404).send('Invalid order status');
  }
  
  if (page < 1) {
    return res.redirect(`/orders/${status}/1`);
  }
  
  const searchList = search ? [{ name: 'search', value: search }] : [];
  
  const data = {
    ...ordersData,
    status,
    search,
    searchList,
    pagination: generatePagination(page, ordersData.orderList.length)
  };
  
  renderWithLayout(res, 'orders', data);
});

// Order actions
router.get('/:orderId/refill', (req, res) => {
  const orderId = req.params.orderId;
  console.log(`Processing refill for order ${orderId}`);
  res.redirect('/orders');
});

router.get('/:orderId/cancel', (req, res) => {
  const orderId = req.params.orderId;
  console.log(`Cancelling order ${orderId}`);
  res.redirect('/orders');
});

module.exports = router;
