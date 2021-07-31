import { DEFAULT_VISUAL_EXCEPTION_CATEGORIES as exceptionCategories, DEFAULT_VISUAL_EXCEPTIONS as exceptions} from "./constants";
import { IBaseException, IBaseExceptionCategory, TExceptionCategoryType } from "./interfaces";

/**
 * A helper class that contains useful methods to manage the visual exceptions within the components.
 */
export class ExceptionHelper {
  /**
   * Get the exception category from the category collection using its type property.
   * @param type Type of category exception used to target the category exception within the DEFAULT_VISUAL_EXCEPTION_CATEGORIES constant array.
   */
  static getExceptionCategoryByType(type: TExceptionCategoryType): IBaseExceptionCategory | undefined {
    return exceptionCategories.find((category: IBaseExceptionCategory) => category.type === type);
  }

  /**
   * Get the exception from the exception collection using its code property.
   * @param type Code of exception used to target the category exception within the DEFAULT_VISUAL_EXCEPTIONS constant array.
   */
  static getExceptionByCode(code: string): IBaseException | undefined {
    return exceptions.find((exception: IBaseException) => exception.code === code);
  }
}