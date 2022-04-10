import styled from 'styled-components/native';
import Text from '../../widget/text';
import View from '../../widget/topContainer';
import Image from '../../widget/avatar';

export const TextView = styled(Text)`
   color: white; 
   font-size: 20px; 
   margin-vertical: 10px; 
   align-self: center; 
   align-items: flex-end;
`;

export const Container = styled.View`
    flex: 1;
    flex-direction: column;
`;

export const SocialAuthView = styled.View`
    flex: 1
`;

export const TopContainer = styled(View)`
    flex: 7; 
    background-color: #1C74E4;
    padding-left: 30px;
    padding-right: 20px;
    padding-top: 30px;
`;

export const BottomContainer = styled.View`
    flex: 1;
    flex-direction: row; 
    justify-content: space-evenly; 
    align-items: center;
`;


export const TopContainerContent = styled.View`
    flex-direction: column; 
    flex: 1; 
    align-content: space-between
`;

export const Brand = styled.View`
    flex-direction: row; 
    align-items: center; 
    margin-bottom: 40px
`;

export const BrandName = styled.Text`
    color: white;
    font-size: 40px; 
    margin-left: 10px;
`;

export const Avatar = styled(Image)``;

export const Welcome = styled.Text`
    color: white; 
    font-size: 40px; 
    margin-bottom: 10px;
`;

export const Instruction = styled.Text`
    color: white;
    font-size: 30px
`;

export const FacebookAuthContainer = styled.View`
    border-color: #1C74E4;
    border-width: 2px; 
    border-radius: 10px; 
    padding: 10px
`;

export const FacebookContent = styled.View`
    flex-direction: row; 
    width: 140px; 
    justify-content: space-between; 
    align-items: center;
`;

export const FacebookText = styled.Text`
    font-size: 20px;
    color: black
`;
export const SocialAuthLogo = styled.Image`
    width: 25px;
    height: 25px;
`;

export const GoogleAuthContainer = styled.View`
   border-color: grey;
   border-width: 1.2px; 
   border-radius: 10px; 
   padding-left: 10px
`;

export const GoogleContent = styled.View`
    flex-direction: row; 
    width: 150px; 
    justify-content: space-between; 
    align-items: center;
`

export const GoogleTextContainer = styled.View`
    background-color: #1C74E4; 
    border-color: #1C74E4; 
    flex: 3; 
    align-items: center; 
    justify-content: center;  
    border-width: 2px; 
    height:50px; 
    border-top-left-radius: 10px; 
    border-bottom-left-radius: 10px;  
    border-top-right-radius: 8px; 
    border-bottom-right-radius: 8px; 
    align-self: center;
`;
export const GoogleText = styled.Text`
    font-size: 20px; 
    color: white; 
    text-align: center;
`;

export const FormContainer = styled.View`
    flex-direction: row; 
    flex: 1; 
    margin-top: 60px;
`;

export const InfoContainer = styled.View`
    flex: 2; 
    background-color: white; 
    justify-content: space-between; 
    border-top-left-radius: 8px; 
    border-bottom-left-radius: 8px;
    flex-direction: row; 
    height: 60px; 
    align-items: center; 
    padding-left: 15px; 
    border-right-width: 2px; 
    border-color: #e5e5e5;
`;

export const Flag = styled.Image`
    width: 35px; 
    height: 20px
`;

export const PostalCode = styled.Text`
    font-weight: bold; 
    font-size: 16px;
`

export const ButtonContainer = styled.View`
    flex: 1; 
    margin-left: 8px; 
    border-color: white; 
    border-width: 3px; 
    border-radius: 8px; 
    height: 60px; 
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    font-size: 20px; 
    color: white;
`;

export const TextInputContainer= styled.View`
    height: 60px;
    flex: 3;
`;

export const TextInput = styled.TextInput`
background-color: #ffffff; 
flex: 1;       
border-top-right-radius: 8px; 
border-bottom-right-radius: 8px; 
padding-left: 15px; 
font-size: 20px;
font-weight: bold;
`