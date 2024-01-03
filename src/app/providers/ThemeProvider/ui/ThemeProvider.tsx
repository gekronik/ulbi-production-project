import { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?:Theme
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const {
        initialTheme,
        children,
    } = props;
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    // мы передаём объект и по сути на каждый рендер компонента у нас будет
    // этот объект инициализироваться заново, то есть объект будет каждый раз новый , ссылка будет каждый раз новая
    // и компонент будет перерисовываться , поэтому используем useMemo

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
