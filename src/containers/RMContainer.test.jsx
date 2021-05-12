import React from 'react';
import { render, screen } from '@testing-library/react';
import RMContainer from './RMContainer';
import { MemoryRouter } from 'react-router-dom';

describe('RMContainer', () => {
    it('renders a list of characters to the page', async () => {
        render(<MemoryRouter><RMContainer /></MemoryRouter>);

        screen.getByText('Loading...');

        const ul = await screen.findByRole('list', { name: 'characters' });
        expect(ul).toMatchSnapshot();
    });
});