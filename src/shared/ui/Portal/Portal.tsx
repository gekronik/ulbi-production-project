import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode // То что мы телепортируем
    element?: HTMLElement // Куда мы телепортируем
}

export const Portal = (props: PortalProps) => {
    const {
        children,
        element = document.body,
    } = props;

    return createPortal(children, element);
};
