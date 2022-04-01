import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img
                        src={incomeImg}
                        alt="icone com a seta para cima. Entrada de ativos"
                    />
                </header>
                <strong>R$1500,00</strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img
                        src={outcomeImg}
                        alt="icone com a seta para baixo. Saida de ativos"
                    />
                </header>
                <strong>- R$1000,00</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="icone saldo conta" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    );
}
