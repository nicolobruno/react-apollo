import userEvent from '@testing-library/user-event';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Filters from './index';
import { FILTER_BUTTON, FILTER_MODAL, FILTER_NAME, FILTER_SPECIES } from '../Filters/components/Modal/constants';

describe('Filters test', () => {
    it ("Should show Modal Filters when the user click Filters button", async () => {
        render(
            <Filters />
        );
    
        userEvent.click(screen.getByTestId(FILTER_BUTTON));
        expect( await screen.findByTestId(FILTER_MODAL)).toBeInTheDocument();
    })

    it ("Should to call submit filter form with value filter name", async () => {
        const handleOnClick = jest.fn();
        render (
            <Filters handleOnClick={handleOnClick} />
        )

        userEvent.click(screen.getByTestId(FILTER_BUTTON));
        fireEvent.change(screen.getByTestId(FILTER_NAME), { target: {value: 'ricky'} })
        fireEvent.submit(screen.getByTestId(FILTER_NAME));
        expect(handleOnClick.mock.calls.length).toBe(1);
        expect(screen.queryByTestId(FILTER_MODAL)).not.toBeInTheDocument();
    })

    it ("Should to call submit filter form with value filter name and specie", async () => {
        const handleOnClick = jest.fn();
        render (
            <Filters handleOnClick={handleOnClick} />
        )

        userEvent.click(screen.getByTestId(FILTER_BUTTON));
        fireEvent.change(screen.getByTestId(FILTER_NAME), { target: {value: 'ricky'} });
        fireEvent.change(screen.getByTestId(FILTER_SPECIES), { target: {value: 'human'} });
        fireEvent.submit(screen.getByTestId(FILTER_NAME));
        expect(handleOnClick.mock.calls.length).toBe(1);
        expect(screen.queryByTestId(FILTER_MODAL)).not.toBeInTheDocument();
    })
})
