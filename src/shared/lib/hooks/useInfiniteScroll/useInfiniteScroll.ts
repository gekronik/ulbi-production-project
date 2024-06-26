// хук с помощью которого используем возможности intersection api
// intersection observer 56 - 10:00
import { MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScrollOptions { // опции которые поступают на вход этого хука
    callback?: () => void // должен вызваться когда мы пересекли тот или иной элемент( когда поялвяется элемент за которым мы следим)
    triggerRef: MutableRefObject<HTMLElement> // мы пересекли элемент, и в этот момент вызываем коллбэк
    wrapperRef: MutableRefObject<HTMLElement> // сам враппер внутии которго находится скролл
}

export function useInfiniteScroll({ callback, triggerRef, wrapperRef }: UseInfiniteScrollOptions) {
    useEffect(() => {
        const wrapperElement = wrapperRef.current;
        const triggerElement = triggerRef.current;
        let observer: IntersectionObserver | null = null;
        if (callback) {
            const options = {
                root: wrapperElement, // элемент в котором находится скролл
                rootMargin: '1px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerElement);
        }

        return () => {
            if (observer && triggerElement) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(triggerElement);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
}
