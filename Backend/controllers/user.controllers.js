import User from "../models/user.schema.js";
import Product from "../models/product.schema.js";
import Cart from "../models/cart.schema.js";

export const AddToCart = async (req, res) => {
  try {
    const { productId, userId } = req.body;

    if (!userId) {
      return res.json({ success: false, message: "User is required .." });
    }

    if (!productId) {
      return res.json({ success: false, message: "Product is required .." });
    }

    const isUserExist = await User.findById(userId);
    if (!isUserExist) {
      return res.json({ success: false, message: "User not found .." });
    }

    const isProductExist = await Product.findById(productId);
    if (!isProductExist) {
      return res.json({ success: false, message: "product not found .." });
    }

    const isUserDocumentExists = await Cart.findOne({ userId });

    if (isUserDocumentExists) {
      isUserDocumentExists.products.push(productId);
      await isUserDocumentExists.save();
    } else {
      const newCartProduct = Cart({ userId: userId, products: [productId] });

      await newCartProduct.save();
    }

    return res.json({
      success: true,
      message: "Product successfully added to cart ..",
    });
  } catch (error) {
    console.log(error, "error in add to cart api call ..");
    return res.json({ success: false, message: error });
  }
};

export const GetCartProducts = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.json({ success: false, message: "User is required .." });
    }

    const cartUserData = await Cart.findOne({ userId });

    if (!cartUserData) {
      return res.json({
        success: true,
        products: [],
        noProductsFound: true,
      });
    }

    return res.json({
      success: true,
      products: cartUserData.products,
    });
  } catch (error) {
    console.log(error, "error in get cart products api call ..");
    return res.json({ success: false, message: error });
  }
};
