import React from 'react';
import { useGlobalContext } from './context';

const SearchForm = () => {
  
const {setSearchTerm} = useGlobalContext();

const handleSubmit = (event) => {
  event.preventDefault();

  const searchValue = event.target.elements.search.value; 

 if(!searchValue) {return;}
 
 setSearchTerm(searchValue); 

}

  return (
    <section>
    <h2 className='title'>Unsplash images</h2>
    <form className='search-form' onSubmit={handleSubmit}>
    <input type="text" name='search' placeholder='cat' className='form-input search-input' />
    <button type='submit' className='btn' >search</button>
    </form>
    </section>
  )
}

export default SearchForm;

