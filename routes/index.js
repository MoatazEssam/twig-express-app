const express = require("express");
const { mergeData, userData, renderWithLayout } = require("../utils/helpers");
const layoutData = require("../data/layout");
const neworderData = require("../data/neworder");

const router = express.Router();

// Home page
router.get("/", (req, res) => {
  const data = mergeData(layoutData);
  data.user = userData;
  res.render("layout", data);
});

// New order routes
router.get("/neworder", (req, res) => {
  renderWithLayout(res, "neworder", neworderData);
});

router.post("/neworder", (req, res) => {
  const successData = {
    ...neworderData,
    success: 1,
    order: {
      id: "12348",
      service: "متابعين إنستغرام عرب حقيقيين",
      link: "https://instagram.com/example_account",
      quantity: "1,000",
      charge: "25.50 ريال",
      balance: "124.50 ريال",
    },
  };

  renderWithLayout(res, "neworder", successData);
});

// Terms page
router.get("/terms", (req, res) => {
  const data = {
    page: {
      title: "Terms of Service",
      description: "Terms and conditions for using our SMM panel services",
    },
  };

  renderWithLayout(res, "terms", data);
});

// account page
router.get("/account", (req, res) => {
  const data = {
    page: {
      title: "Terms of Service",
      description: "Terms and conditions for using our SMM panel services",
    },
  };

  renderWithLayout(res, "account", data);
});

router.get("/notifications", (req, res) => {
  const data = {
    page: {
      title: "Terms of Service",
      description: "Terms and conditions for using our SMM panel services",
    },
  };

  renderWithLayout(res, "notifications", data);
});
router.get("/signup", (req, res) => {
  const data = {
    page: {
      title: "Terms of Service",
      description: "Terms and conditions for using our SMM panel services",
    },
  };

  renderWithLayout(res, "signup", data);
});
router.get("/dashboard", (req, res) => {
  const data = {
    page: {
      title: "Terms of Service",
      description: "Terms and conditions for using our SMM panel services",
    },
  };

  renderWithLayout(res, "dashboard", data);
});
router.get("/services", (req, res) => {
  const data = {
    page: {
      title: "Terms of Service",
      description: "Terms and conditions for using our SMM panel services",
    },
  };

  renderWithLayout(res, "services", data);
});
router.get("/faq", (req, res) => {
  const data = {
    page: {
      title: "Terms of Service",
      description: "Terms and conditions for using our SMM panel services",
    },
  };

  renderWithLayout(res, "faq", data);
});

module.exports = router;
