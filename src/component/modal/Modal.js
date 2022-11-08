import styled from "styled-components";
import Icon from "component/text/Icon";

const Background = styled.div`
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: #00000055;
`;

const Body = styled.div`
    width: 300px;
    min-height: 300px;
    background-color: white;
    margin: 100px auto;
    padding: 30px;
`;

const CloseButton = styled.button`
    float: right;
    z-index: 11;
    margin-right: -10px;
    margin-top: -10px;
    background: none;
    border: none;
`;

export default function Modal(props) {
    return (
        <Background>
            <Body>
                <CloseButton><Icon>fa-solid fa-xmark</Icon></CloseButton>
                {props.children}
            </Body>
        </Background>
    );
}