const errorHandler = (err, req, res, next) => {
  console.error(err);

  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map(
      (error) => error.message
    );

    return res.status(400).json({
      success: false,
      message: "Validation error",
      errors: messages,
    });
  }

  if (err.name === "CastError") {
    return res.status(400).json({
      success: false,
      message: "Invalid product ID",
    });
  }

  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
};

module.exports = errorHandler;