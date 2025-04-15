export const AddProduct = (req, res) => {
  try {
    const { name, price, quantity, category, image } = req.body.productData;
    const { userId } = req.body;
    console.log(
      name,
      "name",
      price,
      "price",
      quantity,
      "quantity",
      category,
      "category",
      image,
      "image"
    );

    console.log(userId, "userId");

    return res.json({
      success: true,
      message: "Product Successfully Created ..",
    });
  } catch (error) {
    console.log(error, "error in add product api call ..");
    return res.json({ success: false, message: error });
  }
};
