import type { CustomFlowbiteTheme } from 'flowbite-react';
import { TextInput, Button } from 'flowbite-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


// Cutom TextField
const customTheme: CustomFlowbiteTheme['textInput'] = {
    base: "flex",
    addon: "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-4 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
    field: {
      base: "relative w-full",
      icon: {
        "base": "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
        "svg": "h-5 w-5 text-gray-500 dark:text-gray-400"
      },
      input: {
        base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
        sizes: {
          sm: "py-2 px-2 sm:text-xs",
          md: "py-4 px-4 text-sm",
          lg: "sm:text-base py-4 px-4"
        },
        colors: {
            default: "bg-transparent border-typography-500 text-typography-500 focus:border-typography-100 focus:text-typography-100 focus:ring-typography-100",
            gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
            info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
            failure: "border-error-100 bg-transparent text-error-100 placeholder-error-100 focus:border-error-100 focus:ring-error-100",
            warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
            success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
        },
      }
    },
};

// TextField Certification
export default function Form() {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const validData = {
    data: '03/03/mg/edu/alsav/2023',
  };
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    // Logika untuk mengubah state menjadi default saat input kosong
    if (value === '') {
      setErrorMessage('');
      setIsError(false);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const regex = /^(\d{2}\/\d{2}\/[A-Z]{2}\/[A-Z]{3}\/ALSAV\/\d{4})|(\d{2}\/\d{2}\/[a-z]{2}\/[a-z]{3}\/alsav\/\d{4})$/;

    if (!inputValue) {
      setErrorMessage('You not entered certification number');
      setIsError(true);
    } else if (!regex.test(inputValue)) {
      setErrorMessage('Format you entered is incorrect');
      setIsError(true);
    } else {

      const dataExists = inputValue === validData.data;

      if (!dataExists) {
        setErrorMessage('Your certification is not registered');
        setIsError(true);
      } else {
        // Data valid, lanjutkan dengan tindakan berikutnya
        // Reset state jika diperlukan
        setErrorMessage('');
        setIsError(false);
        setInputValue('');

        // Redirect pengguna ke halaman yang sesuai
        navigate('/valid');
      }
    }
  };

  const handleInputFocus = () => {
    if (isError) {
      setErrorMessage('');
      setIsError(false);
    }
  };

  return (
    <section className="justify-center md:pl-10 w-full h-auto space-y-5 md:space-y-10 my-auto">
      <div className="space-y-3">
        <h1 className="text-typography-100 text-2xl font-bold text-center lg:text-5xl lg:text-start">Check a Certification</h1>
        <p className="text-typography-300 text-sm text-center md:text-base lg:text-start">Enter the certification number to check the valid certification.</p>
      </div>
        <form onSubmit={handleSubmit} className='space-y-5 md:space-y-10'>
          <div className='space-y-1'>
            <TextInput 
              name = 'certification'
              color={isError ? 'failure' : 'default'} 
              theme={customTheme}  
              value={inputValue}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              placeholder='Certification Number' />
            {isError && <div className="text-sm text-error-100">{errorMessage}</div>}
          </div>
          <Button 
            type="submit" 
            className={isError ? 'w-full bg-error-100 text-sm md:text-base text-white py-2 rounded-lg hover:bg-error-200 active:border-0 focus:border-0' : 'w-full bg-primary-100 text-sm md:text-base text-white py-2 rounded-lg hover:bg-primary-200 active:border-0 focus:border-0'}>Check</Button>
        </form>
    </section>
  );
}