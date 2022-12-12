import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Characters from './index';
import { LOGO_PRINCIPAL } from './constants'; 
import { FILTER_BUTTON, FILTER_MODAL } from '../../components/Filters/components/Modal/constants';
 
const mocks = [];

describe('Characters screen', () => {
    it("should show the principal logo", async () => {  
        render(
            <MockedProvider mocks={mocks} addTypename={false} >
                <Characters />
            </MockedProvider>
        );
    
        expect( await screen.findByTestId(LOGO_PRINCIPAL)).toBeInTheDocument();
    })

    it ("should show the filter button", async () => {
        render( 
            <MockedProvider mocks={mocks} addTypename={false}>
                <Characters />
            </MockedProvider>
        );
        
        expect( await screen.findByTestId(FILTER_BUTTON)).toBeInTheDocument();
    })

    it ("should show the filter modal when the user click on filter button", async () => {
        render( 
            <MockedProvider mocks={mocks} addTypename={false}>
                <Characters />
            </MockedProvider>
        );

        userEvent.click(screen.getByTestId(FILTER_BUTTON));
        expect( await screen.findByTestId(FILTER_MODAL)).toBeInTheDocument();
    })
})