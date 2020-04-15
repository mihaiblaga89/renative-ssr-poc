import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { Icon, Button, getScaledValue, useOpenDrawer, StyleSheet } from 'renative';
import Theme, { themeStyles, hasHorizontalMenu, hasWebFocusableUI } from './theme';
import { useRouter } from 'next/router'
import useWindowWidth from './utils/useWindowHook';

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

const Menu = (props) => {
    const router = useRouter();
    const width = useWindowWidth();

    const isMobile = width < 767 && width > 0;
    if (isMobile) return (
        <div className="menu-container">
            <span className="menu-text">HamburgerMenu</span>
            <style jsx>{`
                    .menu-container {
                        padding-top: ${getScaledValue(40)}px;
                        padding-left: ${getScaledValue(40)}px;
                        width: ${Theme.menuWidth};
                        height: ${Theme.menuHeight}px;
                        background-color: ${Theme.color1};
                    }
                    .menu-text {
                        color: #fff;
                    }
                `}
            </style>
        </div>
    )
    return (
        <View className="menu-container">
            <Text style={themeStyles.text}>
                Next
            </Text>
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
                    padding-top: ${getScaledValue(20)}px;
                    padding-left: ${getScaledValue(40)}px;
                    width: ${Theme.menuWidth};
                    height: ${Theme.menuHeight}px;
                    background-color: ${Theme.color1};
                    align-items: flex-start;
                    flex-direction: row;
                }
            `}</style>
        </View>
    );
};

export default Menu;
