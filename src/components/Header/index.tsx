import LogoImg from "../../assets/logo.svg";
import { Container, Content, Logo } from "./styles";
export function Header() {
    return (
        <>
            <Container>
                <Content>
                    <Logo src={LogoImg} alt="logo do projeto. Nome dt money" />
                    <button type="button">Nova transação</button>
                </Content>
            </Container>
        </>
    );
}
