import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";
export function Summary() {
    const { transactions } = useTransactions();

    const totalDeposits = transactions
        .filter((transaction) => transaction.type === "deposit")
        .reduce((acc, transaction) => acc + transaction.amount, 0);

    const totalWithdraw = transactions
        .filter((transaction) => transaction.type === "withdraw")
        .reduce((acc, transaction) => acc + transaction.amount, 0);

    const total = totalDeposits - totalWithdraw;
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
                <strong>
                    {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    }).format(totalDeposits)}
                </strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img
                        src={outcomeImg}
                        alt="icone com a seta para baixo. Saida de ativos"
                    />
                </header>
                <strong>
                    -
                    {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    }).format(totalWithdraw)}
                </strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="icone saldo conta" />
                </header>
                <strong>
                    {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    }).format(total)}
                </strong>
            </div>
        </Container>
    );
}
