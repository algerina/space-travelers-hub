import React from 'react';
import '@testing-library/jest-dom';
import Rocket from './components/Rocket';
import renderer from 'react-test-renderer';

describe('Check description to be a text', () => {
    it('Should be a text', () => {
const description = getByTestId('description');
expect(description).toHaveValue('text')
    });
});



