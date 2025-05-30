const baseData = require('../data/base');

/**
 * Merge base data with page-specific data
 */
const mergeData = (pageData) => {
  const merged = { ...baseData };
  
  if (pageData.site) {
    merged.site = { ...merged.site, ...pageData.site };
  }
  
  Object.keys(pageData).forEach(key => {
    if (key !== 'site') {
      merged[key] = pageData[key];
    }
  });
  
  return merged;
};

/**
 * Mock user data
 */
const userData = {
  auth: true,
  balance_formatted: '150.00 ريال'
};

/**
 * Render page with layout
 */
const renderWithLayout = (res, templateName, data) => {
  const mergedData = {
    ...mergeData(data),
    user: userData
  };

  res.render(templateName, mergedData, (err, html) => {
    if (err) {
      console.error('Template rendering error:', err);
      return res.status(500).send('Template rendering error');
    }
    
    const layoutDataWithContent = {
      ...mergedData,
      content: html
    };
    
    res.render('layout', layoutDataWithContent);
  });
};

/**
 * Generate pagination data
 */
const generatePagination = (currentPage, totalItems, itemsPerPage = 100) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  return {
    current: currentPage,
    pages: totalPages,
    count: totalItems,
    next: currentPage < totalPages ? currentPage + 1 : currentPage,
    last: currentPage > 1 ? currentPage - 1 : 1
  };
};

module.exports = {
  mergeData,
  userData,
  renderWithLayout,
  generatePagination
};
