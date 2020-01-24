export function convertKebabCase(text:string):string {
    return text
            .split(" ")
            .join("-")
            .toLowerCase();
}

export function leadingZero(num:number):string {
    return num < 10 && "0" + num.toString();
}