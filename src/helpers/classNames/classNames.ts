

type Mods = Record<string, string | boolean>

export function classNames(cls:string, mods: Mods, additional:string[]):string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([className,value]) => Boolean(value)) // оставляем только те элементы у которых value === true
            .map(([className]) => className) // с помощью map итерируемся и возвращаем только ключ и эти ключи будут названиями классов
    ]
        .join(' ')
}