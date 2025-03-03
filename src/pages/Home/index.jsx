import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { Container } from '../../styles/GlobalStyles';
import { BookSection, InputControll, TextNotFound } from './styled';
import axios from '../../services/axios';

export default function Home() {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    async function searchBooks() {
        if (!search.trim()) return;
        try {
            const response = await axios.get(
                `volumes?q=${search}&langRestrict=pt`,
            );
            setBooks(response.data.items || []);
            console.log(response.data.items);
        } catch {}
    }

    function RedirectBtn(book) {
        const id = book.id;
        navigate(`book/${id}`);
    }

    return (
        <Container>
            <InputControll>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={searchBooks}>Search</button>
            </InputControll>
            {books.length === 0 && (
                <TextNotFound>Nenhum livro encontrado.</TextNotFound>
            )}
            <BookSection>
                {books.map((livro) => (
                    <div className="bookCard">
                        {livro.volumeInfo.imageLinks?.thumbnail && (
                            <img
                                src={livro.volumeInfo.imageLinks.thumbnail}
                                alt="Capa do livro"
                            />
                        )}
                        <div className="bookInfo">
                            <span>{livro.volumeInfo.title}</span>
                            <br />
                            <span>
                                Authors:{' '}
                                <span className="result">
                                    {livro.volumeInfo.authors?.join(', ')}
                                </span>
                            </span>
                            <br />
                            <span>
                                Published Date:{' '}
                                <span className="result">
                                    {livro.volumeInfo.publishedDate}
                                </span>
                            </span>
                            <br />
                            <span>
                                Publisher:{' '}
                                <span className="result">
                                    {livro.volumeInfo.publisher}
                                </span>
                            </span>
                            <br />

                            <button
                                className="more-btn"
                                onClick={() => RedirectBtn(livro)}
                            >
                                More
                            </button>
                        </div>
                    </div>
                ))}
            </BookSection>
        </Container>
    );
}
