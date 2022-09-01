import express from "express";

import {
  GetAllDetailsProducts,
  GetAllProducts,
  GetProductByID,
  AddProduct,
  AddReview,
  UpdateProduct,
  deleteProduct,
  GetTopProducts,
} from "../controllers/ProductController";

import checkFileType from "../utils/CheckFile";
import multer from "multer";
import Auth from "../middleware/AuthMiddleware";
import Admin from "../middleware/AdminMiddleware";
import ZodMiddleware from "../middleware/ZodMiddleware";
import {
  AddProjectValidation,
  UpdateProductValidation,
} from "@ecommerce/validation";

const router = express.Router();

const upload = multer({
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});
//Product
router.route("/").get(GetAllProducts);
router.route("/all").get(Admin, GetAllDetailsProducts);

router.route("/top").get(GetTopProducts);
router
  .route("/add")
  .post(
    Admin,
    ZodMiddleware(AddProjectValidation),
    upload.single("imageFile"),
    AddProduct
  );
router
  .route("/product/:id")
  .get(GetProductByID)
  .put(
    Admin,
    ZodMiddleware(UpdateProductValidation),
    upload.single("imageFile"),
    UpdateProduct
  )
  .delete(Admin, deleteProduct);

router.route("/review/:id").post(Auth, AddReview);

export default router;
