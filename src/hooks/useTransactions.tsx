import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import { api } from "../services/api";

interface TransactonsProviderProps {
    children: ReactNode;
}

interface Transaction {
    title: string;
    id: number;
    type: string;
    amount: number;
    category: string;
    createdAt: Date;
}

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transactionInput: TransactionInput) => Promise<void>;
}

const transactionContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionProvider({ children }: TransactonsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    useEffect(() => {
        api.get("transactions").then((response) => {
            console.log(response.data);
            setTransactions(response.data.transactions);
        });
    }, []);

    async function createTransaction(transactionInput: TransactionInput) {
        const response = await api.post("/transactions", {
            ...transactionInput,
            createdAt: new Date(),
        });

        const { transaction } = response.data;
        setTransactions([...transactions, transaction]);
    }

    return (
        <transactionContext.Provider
            value={{ transactions, createTransaction }}
        >
            {children}
        </transactionContext.Provider>
    );
}

export function useTransactions() {
    const context = useContext(transactionContext);

    return context;
}
