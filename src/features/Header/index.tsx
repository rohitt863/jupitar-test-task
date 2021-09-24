import React from "react";
import {
    HeaderWrapper,
    HeaderBody,
    LogoContainer,
    SearchWrapper,
    OptionsWrapper,
    ButtonWrapper,
    GetButton,
    OptionsListWrapper,
    OptionType,
    SearchIcon,
    Input
} from './assets/styles';
import Logo from "./assets/images/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { optionsList } from './constants'

const Header = (props: any) => {
    const { handleSearch } = props
    return (
        <HeaderWrapper>
            <HeaderBody>
                <LogoContainer>
                    <img src={Logo} alt="logo" />
                </LogoContainer>
                <SearchWrapper>
                    <Input
                        type="text"
                        placeholder="Search Jupiter"
                        onChange={handleSearch}
                    />
                    <SearchIcon ><AiOutlineSearch /></SearchIcon>
                </SearchWrapper>
                <OptionsWrapper>
                    <ButtonWrapper >
                        <GetButton >get $20 off</GetButton>
                    </ButtonWrapper>
                    <OptionsListWrapper>
                        {optionsList.map((item, index) => {
                            const Icon = item.icon
                            return (
                                <OptionType key={`${item.title}_${index}`}>
                                    <a href={item.url}>
                                        <Icon />
                                    </a>
                                    <div>{item.title}</div>
                                </OptionType>
                            )
                        })}
                    </OptionsListWrapper>

                </OptionsWrapper>
            </HeaderBody>
        </HeaderWrapper>
    );
}

export default Header;
