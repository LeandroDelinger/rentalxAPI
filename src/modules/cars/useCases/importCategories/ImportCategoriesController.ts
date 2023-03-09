import { Request, Response } from "express";
import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase";

class ImportCategoriesController {
    constructor(private importCateriesUseCase: ImportCategoriesUseCase) {}

    handle(request: Request, response: Response): Response {
        const { file } = request;

        this.importCateriesUseCase.execute(file);

        return response.status(201).send();
    }
}

export { ImportCategoriesController };
