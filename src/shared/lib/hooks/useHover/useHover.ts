// чтобы управлять ховером на какой то элемент через js есть смпециальные события
// onMouseLeave, onMouseEnter,onMouseMove
// это события которые отвечают за пололжение мыши относительно какого то элемента

import { useCallback, useMemo, useState } from 'react';

interface UseHoverBind {
    onMouseEnter: () => void
    onMouseLeave: () => void
}

type UseHoverResult = [boolean, UseHoverBind]

export const useHover = ():UseHoverResult => {
    const [isHover, setIsHover] = useState(false);

    const onMouseEnter = useCallback(() => {
        setIsHover(true);
    }, []);

    const onMouseLeave = useCallback(() => {
        setIsHover(false);
    }, []);

    return useMemo(() => [ // вовзращам и состяние и сами функции
        isHover,
        {
            onMouseEnter,
            onMouseLeave,
        },
    ], [isHover, onMouseEnter, onMouseLeave]);
};
