const { validateQuote } = require("./helper");
const {
  validateReqId,
  validateReqBody,
} = require("../../middleware/joi-validate");
const {
  saveQuote,
  getQuote,
  updateQuote,
  deleteQuote,
} = require("./controller");
const Router = require("@koa/router");
const router = new Router({
  prefix: "/api/quote",
});

router.post("/", validateReqBody(validateQuote), saveQuote);
router.get("/:id", validateReqId(validateQuote), getQuote);
router.patch(
  "/:id",
  validateReqId(validateQuote),
  validateReqBody(validateQuote),
  updateQuote
);
router.delete("/:id", validateReqId(validateQuote), deleteQuote);

// router.post("/item/:quoteId", catchErrors(saveQuoteItem));
// router.get("/item/:quoteId/:id", catchErrors(getQuoteItem));
// router.patch("/item/:quoteId/:id", catchErrors(updateQuoteItem));
// router.delete("/item/:quoteId/:id", catchErrors(deleteQuoteItem));

// router.post("/payment/:quoteId", catchErrors(saveQuotePayment));
// router.get("/payment/:quoteId/:id", catchErrors(getQuotePayment));
// router.patch("/payment/:quoteId/:id", catchErrors(updateQuotePayment));
// router.delete("/payment/:quoteId/:id", catchErrors(deleteQuotePayment));

module.exports = router;
