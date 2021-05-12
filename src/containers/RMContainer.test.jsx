import React from 'react';
import { render, screen } from '@testing-library/react';
import RMContainer from './RMContainer';

describe('RMContainer', () => {
    it('renders a list of characters to the page', async () => {
        render(<RMContainer />);

        screen.getByText('Loading...');

        const ul = await screen.findByRole('list', { name: 'characters' });
        expect(ul).toMatchSnapshot();
    });
});