import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: auto;
    padding: 2rem 1rem 8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        color: #fff;
        border: 0;
        background: var(--blue-light);
        border-radius: 0.25rem;
        padding: 0rem 2rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;
