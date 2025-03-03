import React, { useEffect, useState } from 'react';
import { DiGithubBadge } from 'react-icons/di';
import { Footer } from './styled';

export default function FooterBar() {
    return (
        <Footer>
            <li className="link">
                <a href="/">Book Search</a>
            </li>
            <li>© Copyright 2025 Gabriel Henrique. All rights reserved.</li>
            <li className="link">
                <a href="https://github.com/GabrielHenrique16y">
                    <DiGithubBadge fontSize={'48'} color="#fff" />
                </a>
            </li>
        </Footer>
    );
}
