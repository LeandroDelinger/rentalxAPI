import { Request, Response, Router } from "express";

import multer from "multer";

import { CategoriesRepository } from "../modules/cars/repositories/implementations/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { importCategoriesController } from "../modules/cars/useCases/importCategories";
import { ImportCategoriesController } from "../modules/cars/useCases/importCategories/ImportCategoriesController";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

// create new category
categoriesRoutes.post("/", (req: Request, res: Response) => {
    return createCategoryController.handle(req, res);
});

// list all categories
categoriesRoutes.get("/list", (req: Request, res: Response) => {
    return listCategoriesController.handle(req, res);
});

//
categoriesRoutes.post(
    "/import",
    upload.single("file"),
    (req: Request, res: Response) => {
        return importCategoriesController.handle(req, res);
    }
);

export { categoriesRoutes };
