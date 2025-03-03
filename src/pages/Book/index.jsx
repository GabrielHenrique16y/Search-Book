import React, { useEffect, useState } from 'react';
import axios from '../../services/axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, BookContainer, DescContainer } from './styled';

export default function Book() {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const navigate = useNavigate();

    function exampleBtn() {
        const readLink = book?.accessInfo?.webReaderLink;
        if (readLink) {
            window.open(readLink, '_blank');
        } else {
            alert('Este livro não está disponível para leitura.');
        }
    }

    function buyBtn() {
        const buyLink = book?.saleInfo?.buyLink;
        if (buyLink) {
            window.open(buyLink, '_blank');
        } else {
            alert('Este livro não está disponível para compra.');
        }
    }

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get(
                    `https://www.googleapis.com/books/v1/volumes/${id}`,
                );
                setBook(response.data);
            } catch {
                navigate('/');
            }
        }

        getData();
    }, [id, navigate]);

    if (!book) {
        return (
            <Container>
                <h2>Carregando...</h2>
            </Container>
        );
    }

    return (
        <Container>
            <BookContainer>
                <h2>{book.volumeInfo?.title || 'Título não disponível'}</h2>
                <img
                    src={
                        book.volumeInfo?.imageLinks?.thumbnail ||
                        'https://via.placeholder.com/128x180?text=Sem+Capa'
                    }
                    alt="Capa do Livro"
                />
                <div className="infoTexts">
                    <p>
                        <strong>Authors:</strong>
                        <span className="response">
                            {book.volumeInfo?.authors?.join(', ') ||
                                'Autor desconhecido'}
                        </span>
                    </p>
                    <p>
                        <strong>Publisher:</strong>
                        <span className="response">
                            {book.volumeInfo?.publisher || 'Não disponível'}
                        </span>
                    </p>
                    <p>
                        <strong>Published Date:</strong>
                        <span className="response">
                            {book.volumeInfo?.publishedDate || 'Não disponível'}
                        </span>
                    </p>
                    <p>
                        <strong>Number of pages:</strong>
                        <span className="response">
                            {book.volumeInfo?.pageCount
                                ? `${book.volumeInfo.pageCount} Pages`
                                : 'Não disponível'}
                        </span>
                    </p>
                </div>
            </BookContainer>

            <DescContainer>
                <h3>Book Description</h3>
                <p className="descText">
                    {book.volumeInfo?.description ||
                        'Descrição não disponível.'}
                </p>
                <div className="btnContent">
                    <button onClick={exampleBtn}>Read a example</button>
                    <button onClick={buyBtn}>Buy this book</button>
                </div>
            </DescContainer>
        </Container>
    );
}
