import React, { useEffect, useState } from 'react';
import { Nav } from './styled';

export default function Header() {
    return (
        <Nav>
            <li className="link"><a href="/">Book Search</a></li>
        </Nav>
    );
}
