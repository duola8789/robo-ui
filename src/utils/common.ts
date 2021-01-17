export function getFoodToEat(value: any[], options: {label: string; value: string | number}[]) {
    return value.map((v) => options.find((option) => option.value === v)!.label).join(', ');
}
