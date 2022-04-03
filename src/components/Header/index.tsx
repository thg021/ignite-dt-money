import LogoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
    onHandleOpenTransactionModal: () => void;
}

export function Header({ onHandleOpenTransactionModal }: HeaderProps) {
    return (
        <>
            <Container>
                <Content>
                    <img src={LogoImg} alt="logo do projeto. Nome dt money" />
                    <button
                        type="button"
                        onClick={onHandleOpenTransactionModal}
                    >
                        Nova transação
                    </button>
                </Content>
            </Container>
        </>
    );
}
