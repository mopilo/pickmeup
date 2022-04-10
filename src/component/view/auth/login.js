import React from 'react';
import { 
  TextView, 
  TopContainer, 
  Container, 
  BottomContainer, 
  TopContainerContent, 
  Brand, 
  BrandName, 
  Avatar, 
  Welcome, 
  Instruction,
  FacebookAuthContainer,
  FacebookContent,
  FacebookText,
  GoogleAuthContainer,
  GoogleContent,
  GoogleTextContainer,
  GoogleText, 
  SocialAuthLogo,
  FormContainer,
  InfoContainer,
  Flag,
  PostalCode,
  ButtonContainer,
  ButtonText,
  TextInputContainer,
  TextInput, 
  SocialAuthView
} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const brandLogo = require('./asset/logo.png');
const facebookLogo = require('./asset/facebook-square.png');
const googleLogo = require('./asset/google.png');
const flag = require('./asset/flag.png');

const login = () => {
  return (
    <Container>
      <TopContainer>
        <TopContainerContent>
          <Brand>
            <Avatar source={brandLogo}/>
            <BrandName>Pickmeup</BrandName>
          </Brand>
          <Welcome>Hey there!</Welcome>
          <Instruction>Type in your phone number to get started</Instruction>
          <FormContainer>
            <InfoContainer>
              <Flag source={flag}/>
              <PostalCode>+234</PostalCode>
              <Icon name="menu-down" size={30} color="black" />
            </InfoContainer>
            <TextInputContainer>
              <TextInput placeholder='08139156789'/>
            </TextInputContainer>
            <ButtonContainer >
              <ButtonText>GO</ButtonText>
            </ButtonContainer>
          </FormContainer>
          
        </TopContainerContent>
        <TextView>or you can sign in with</TextView>
      </TopContainer>

      <BottomContainer>

        <FacebookAuthContainer>
          <FacebookContent>
            <SocialAuthLogo source={facebookLogo} />
            <FacebookText>Facebook</FacebookText>
          </FacebookContent> 
        </FacebookAuthContainer>

        <GoogleAuthContainer>
          <GoogleContent>
            <SocialAuthView style={{flex: 1}}>
              <SocialAuthLogo source={googleLogo} />
            </SocialAuthView>
            <GoogleTextContainer>
              <GoogleText>Google</GoogleText>
            </GoogleTextContainer> 
          </GoogleContent>
        </GoogleAuthContainer>

      </BottomContainer>
    </Container>
  );
};

export default login;
