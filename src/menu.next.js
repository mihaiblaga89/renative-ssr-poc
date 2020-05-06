import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import classNames from 'classnames';
import { Icon, Button, getScaledValue, useOpenDrawer, StyleSheet } from 'renative';

import Theme, { themeStyles, hasHorizontalMenu, hasWebFocusableUI } from './theme';
import { useRouter } from 'next/router'
import useWindowWidth from './utils/useWindowHook';
import AnimatedComponent from './utils/AnimatedComponent';
import { slideDown, opacity } from './utils/animations'; 

export const DrawerButton = (props) => {
    const openDrawer = useOpenDrawer(props);
    return (
        <Icon
            iconFont="ionicons"
            iconName="md-menu"
            iconColor={Theme.color3}
            size={Theme.iconSize}
            style={themeStyles.icon}
            onPress={() => {
                openDrawer('Drawer');
            }}
        />
    );
};

const styles = StyleSheet.create({
    button: {
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
        marginHorizontal: hasHorizontalMenu ? getScaledValue(20) : 0,
        marginTop: hasHorizontalMenu ? 0 : getScaledValue(20),
        maxWidth: getScaledValue(400),
        minWidth: getScaledValue(50),
        borderWidth: 0
    },
    buttonText: {
        fontFamily: 'TimeBurner',
        color: '#62DBFB',
        fontSize: getScaledValue(20)
    }
});

const Menu = ({ onClose }) => {
    const router = useRouter();
    const width = useWindowWidth();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const isMobile = width < 767 && width > 0;
   
    const menu =  (
        <>
            {!isMobile && <Text style={themeStyles.text}>
                Next
            </Text>}
            <Button
                to="/"
                title="Home"
                iconFont="ionicons"
                className="focusable"
                iconName="md-home"
                iconColor={Theme.color3}
                iconSize={Theme.iconSize}
                style={styles.button}
                textStyle={styles.buttonText}
                onPress={() => {
                    setMobileMenuOpen(false);
                    router.push('/');
                }}
                onEnterPress={() => {
                    router.push('/');
                }}
            />
            <Button
                to="my-page"
                title="My Page"
                iconFont="ionicons"
                iconName="md-book"
                className="focusable"
                iconColor={Theme.color3}
                iconSize={Theme.iconSize}
                style={styles.button}
                textStyle={styles.buttonText}
                onPress={() => {
                    setMobileMenuOpen(false);
                    router.push('/my-page');
                }}
                onEnterPress={() => {
                    router.push('/my-page');
                }}
            />
            <Button
                to="modal"
                title="My Modal"
                iconFont="ionicons"
                className="focusable"
                iconName="ios-albums"
                iconColor={Theme.color3}
                iconSize={Theme.iconSize}
                style={styles.button}
                textStyle={styles.buttonText}
                onPress={() => {}}
                onEnterPress={() => {}}
            />
            <style jsx>{`
                .menu-container {
                    display: flex;
                    padding-top: ${getScaledValue(20)}px;
                    padding-left: ${getScaledValue(40)}px;
                    width: ${Theme.menuWidth};
                    height: ${Theme.menuHeight}px;
                    background-color: ${Theme.color1};
                    align-items: flex-start;
                    flex-direction: row;
                }
            `}</style>
        </>
    );

     if (isMobile) return (
         <>
            <div className="menu-container">
                <img onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="ham-icon" src='/menu.png' />
            </div>
            {mobileMenuOpen && (
                <AnimatedComponent
                    className={classNames("animation", { mobileMenuOpen })}
                    animations={[slideDown, opacity]}
                    delay={0.1}
                    duration={0.5}            
                >
                    <div className="mobile-menu-wrapper">{menu}</div>
                </AnimatedComponent>
            )}
            <style jsx>{`
                        .animation {
                            position: absolute;
                            top: 70px;
                            width: 100%;
                            z-index: 10;
                            height: 0;
                        }
                        .animation.mobileMenuOpen {
                            height: 100%;
                        }
                        .mobile-menu-wrapper {
                            height: 100%;
                            background-color: ${Theme.color1};
                        }
                        .ham-icon {
                            width: 30px;
                            height: 30px;
                        }
                        .menu-container {
                            padding: 20px;
                            width: ${Theme.menuWidth};
                            height: 30px;
                            background-color: ${Theme.color1};
                        }
                        .menu-text {
                            color: #fff;
                        }
                    `}
                </style>
        </>
    )

    return <div className="menu-container">{menu}</div>;
};

export default Menu;
