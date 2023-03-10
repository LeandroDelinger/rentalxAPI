import { Category } from "../../models/Category";
import { ICategoryRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
    constructor(private categoryRepository: ICategoryRepository) {}

    execute(): Category[] {
        const categories = this.categoryRepository.list();

        return categories;
    }
}

export { ListCategoriesUseCase };
