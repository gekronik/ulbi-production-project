export type Mods = Record<string, string | boolean | undefined>

export function classNames(
    cls:string,
    mods: Mods = {},
    additional:Array<string | undefined> = [],
):string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([, value]) => Boolean(value)) // оставляем только те элементы у которых value === true
            .map(([className]) => className), // с помощью map итерируемся и возвращаем только ключ и эти ключи будут названиями классов
    ]
        .join(' ');
}
