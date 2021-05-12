import React from 'react';
import { render, screen } from '@testing-library/react';
import DetailContainer from './DetailContainer';
import { MemoryRouter } from 'react-router-dom';

describe('DetailContainer', () => {
    it('renders details of character to the page', async () => {
        render(<MemoryRouter><DetailContainer match={{ 
            params: { 
                id: 1
            }
        }}/></MemoryRouter>);

        const li = await screen.findByRole('list', { name: 'character' });

        expect(li).toMatchSnapshot();
    });
});