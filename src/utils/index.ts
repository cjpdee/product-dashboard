export function convertKebabCase(text:string):string {
    return text
            .split(" ")
            .join("-")
            .toLowerCase();
}