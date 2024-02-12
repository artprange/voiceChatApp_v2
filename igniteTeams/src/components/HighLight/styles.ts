import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    margin: 32px 0;

`;


export const Title = styled.Text`
    text-align: center;
    font-size: ${({theme})=>theme.FONTS.XL}px;
    font-family: ${({theme})=>theme.FONTS.BOLD};
    color: ${({theme})=>theme.COLORS.WHITE};
`

export const SubTitle = styled.Text`
    text-align: center;
    font-size: ${({theme})=>theme.FONTS.MD}px;
    font-family: ${({theme})=>theme.FONTS.REGULAR};
    color: ${({theme})=>theme.COLORS.GRAY_300};
`