import { Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (req, res) => {
    return createSpecificationController.handle(req, res);
});

export { specificationsRoutes };
