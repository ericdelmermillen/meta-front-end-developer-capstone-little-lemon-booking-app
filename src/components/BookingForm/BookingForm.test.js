import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider, AppContext } from '../../index.js';
import BookingForm from '../../components/BookingForm/BookingForm.jsx';

const mockContextValues = {
  showNav: true,
  setShowNav: jest.fn(),
  scrollYPos: 0,
  setScrollYPos: jest.fn(),
  prevScrollYPos: 0,
  setPrevScrollYPos: jest.fn(),
  windowWidth: 1024,
  setWindowWidth: jest.fn(),
  showBookingForm: true,
  setShowBookingForm: jest.fn(),
  showBookingConfirmed: false,
  setShowBookingConfirmed: jest.fn(),
  reservationDate: new Date(),
  setReservationDate: jest.fn(),
  formattedReservationDate: 'January 1, 2023',
  setFormattedReservationDate: jest.fn(),
  selectedHour: 12,
  setSelectedHour: jest.fn(),
  selectedMinute: 0,
  setSelectedMinute: jest.fn(),
  selectedPeriod: 'AM',
  setSelectedPeriod: jest.fn(),
  guestNumber: 1,
  setGuestNumber: jest.fn(),
  reservationName: '',
  setReservationName: jest.fn(),
  reservationEmail: '',
  setReservationEmail: jest.fn(),
  extraInfo: '',
  setExtraInfo: jest.fn(),
  nameIsInvalid: null,
  setNameIsInvalid: jest.fn(),
  emailIsInvalid: null,
  setEmailIsInvalid: jest.fn(),
};

test('Name Input Test', () => {
  const { getByLabelText } = render(
    <BrowserRouter>
      <AppProvider value={mockContextValues}>
        <BookingForm />
      </AppProvider>
    </BrowserRouter>
  );

  const nameInput = getByLabelText('Reservation Name:');

  fireEvent.change(nameInput, { target: { value: 'John' } });
  expect(nameInput.value).toBe('John');
});

test('Email Input Test', () => {
  const { getByLabelText } = render(
    <BrowserRouter>
      <AppProvider value={mockContextValues}>
        <BookingForm />
      </AppProvider>
    </BrowserRouter>
  );

  const emailInput = getByLabelText('Reservation Email:');

  fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
  expect(emailInput.value).toBe('john@example.com');
});
