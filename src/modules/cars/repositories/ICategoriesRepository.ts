import { Category } from "../models/Category";

interface ICategoryRepository {
    findByName(name: string): Category;
    list(): Category[];
    create({ name, description }: ICreateCategoryDTO): void;
}

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

export { ICategoryRepository, ICreateCategoryDTO };
