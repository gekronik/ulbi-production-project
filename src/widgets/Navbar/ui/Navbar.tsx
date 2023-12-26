import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps { // интерфейс для пропсов, который навбар ожидает на вход
    className?: string // каждый компонент который м будем разрабатывать, извне будет принимать какой то дополнительный класс
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.navbar, {}, [className])}>

        <div className={cls.links}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
                Главная
            </AppLink>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <AppLink theme={AppLinkTheme.RED} to="/about">О сайте</AppLink>
        </div>
    </div>
);
