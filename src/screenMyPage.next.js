import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { getScaledValue } from 'renative';
import { themeStyles, hasWebFocusableUI } from './theme';

const ScreenMyPage = () => (
    <div className="page-wrapper">
        <ScrollView contentContainerStyle={themeStyles.container}>
            <Text style={themeStyles.textH2}>This is my Page!</Text>
        </ScrollView>
        <style jsx>{`
            .page-wrapper {
                flex: 1;
                background-color: #222222;
            }
        `}</style>
    </div>
);

export default ScreenMyPage;
