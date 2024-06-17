import React, { useEffect, useState } from 'react'
import './App.css'
import CatComponent from './components/catComponent';

// https://cataas.com/
// https://cataas.com/cat/says/jksdhsakjdhasd?fontSize=50&fontColor=red

function App() {
  const [text, setText] = useState<string>('');
  // const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const input = (form.elements.namedItem('text') as HTMLInputElement).value;
    console.log(input);
    setText(input);

    form.reset();
  }

  return (
    <>
      <main className='flex flex-col items-center justify-center min-h-screen gap-8 bg-slate-100'>
        <h1 className='text-6xl line-clamp-3 font-bold'>Generador</h1>

        <form onSubmit={handleSubmit} className='flex flex-row gap-4'>
          <input
            name='text'
            type="text"
            placeholder='Ingrese el texto'
            className='w-full rounded-sm border-gray-200 pe-10 shadow-sm sm:text-sm p-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            // onChange={handleChange}
          />
          <button
            type='submit'
            className='inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500'>
            Generar
          </button>
          
        </form>

        <CatComponent text={text} />

      </main>
    </>
  )
}

export default App
