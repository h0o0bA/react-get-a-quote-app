import { render } from '@testing-library/react';
import UserDetails from '../UserDetails';

describe('UserDetails component', () => {
    it('renders user details component without crashing', () => {
        const { getByTestId } = render(<UserDetails />);
        expect(getByTestId('user-details')).toBeInTheDocument();
    });
});