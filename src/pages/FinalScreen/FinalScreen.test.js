import { render } from '@testing-library/react';
import FinalScreen from '../FinalScreen';

describe('FinalScreen component', () => {
    it('renders final screen component without crashing', () => {
        const { getByTestId } = render(<FinalScreen />);
        expect(getByTestId('final-screen')).toBeInTheDocument();
    });
});