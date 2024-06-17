import React, { useEffect, useState } from 'react';
import { getCatImage, getCat } from '../services/catService';

type CatOptions = {
  fontSize?: number;
  fontColor?: string;
}

type CatProps = {
  text: string;
  options?: CatOptions;
}


export default function CatComponent(props: CatProps) {
  const [catImage, setCatImage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  // const [text, setText] = useState<string>(props.text);

  useEffect(() => {
    console.log(props.text)
    fetchCatImage(props.text);
  }, [props.text]);

  const fetchCatImage = async (text: string) => {
    if (text !== '') {
      try {
        const imageUrl = await getCat(text);
        setCatImage(imageUrl);
      } catch (err) {
        setError('Failed to fetch cat image');
      } finally {
        setLoading(false);
      }
    } else {
      try {
        const imageUrl = await getCatImage();
        setCatImage(imageUrl);
      } catch (err) {
        setError('Failed to fetch cat image');
      } finally {
        setLoading(false);
      }
    }
  };


  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>

      <div>
        <h1>Random Cat Image</h1>
        <img src={catImage} alt="A Random Cat" />
      </div>

    </>
  );
};
