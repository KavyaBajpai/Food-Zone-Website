import React from 'react'
import { useState,useEffect } from 'react'
import './App.css'
import styled from "styled-components"
import SearchResult from './components/SearchResult'
export const BASE_URL= "http://localhost:9000"
const App=()=> {
  const [data, setData] = useState(null)
  const [filteredData, setFilteredData]= useState(null)
  const [loading, setLoading] =useState(false)
  const [error, setError] =useState(null)
  const [selectedBtn, setSelectedBtn]= useState("all")

  useEffect(()=> {
    const fetchFoods= async () => {
      setLoading(true);
      try{
        const response= await fetch(BASE_URL);
        const json= await response.json();
  
        setData(json);
        setFilteredData(json);
        setLoading(false);
      }
  
      catch (error) {
         setError("Unable to fetch data");
         setLoading(false);
      }
    }

    fetchFoods();
  },[])
  
  const searchFood= (e)=> {
    const searchValue= e.target.value;

    if(searchValue==="")
      setFilteredData(data);

    const filter = data?.filter((food)=> food.name.toLowerCase().includes(searchValue.toLowerCase()));
    setFilteredData(filter);
  }

  const filterFood= (type)=> {
     if(type==="all")
      {setFilteredData(data);
      setSelectedBtn("all");
      return;}

      const filter = data?.filter((food)=> food.type.toLowerCase().includes(type.toLowerCase()))
      setFilteredData(filter);
      setSelectedBtn(type);

  }
  if(error) return <div>{error}</div>
  if(loading) return <div>Loading...</div>

  return (
    <Container className='h-screen flex flex-col '>  
     
     <TopContainer className='h-[220px] w-screen flex flex-col gap-2 items-center justify-between pl-4 pr-4 pt-2 pb-2'>
      <div className='w-screen px-6 py-5 flex justify-between'>
      <div className='logo'>
        <img src="/Foody Zone.svg" alt="logo" className='shadow-lg hover:scale-125 hover:duration-300'/>
      </div>

      <div className='search'>
        <input 
         onChange= {searchFood}
         placeholder='search food here'
         className='outline-none p-2 bg-[#4f4343] hover:bg-[#736262] text-white rounded-md shadow-lg'
        />
      </div>
      </div>
    

      <FilterContainer className='flex gap-3 pb-4'>
        <Button onClick={ ()=> filterFood("all")} className='p-2 rounded-md text-white text-2lg text-gray-200 hover:shadow-lg hover:bg-[#db9e9e]'>All</Button>
        <Button onClick={ ()=> filterFood("breakfast")} className='p-2 rounded-md text-white text-2lg text-gray-200 hover:shadow-lg hover:bg-[#db9e9e]'>Breakfast</Button>
        <Button onClick={ ()=> filterFood("lunch")} className='p-2 rounded-md text-white text-2lg text-gray-200 hover:shadow-lg hover:bg-[#db9e9e]'>Lunch</Button>
        <Button onClick={ ()=> filterFood("dinner")} className='p-2 rounded-md text-white text-2lg text-gray-200 hover:shadow-lg hover:bg-[#db9e9e]'>Dinner</Button>
        <Button onClick={ ()=> filterFood("dessert")} className='p-2 rounded-md text-white text-2lg text-gray-200 hover:shadow-lg hover:bg-[#db9e9e]'>Dessert</Button>
      </FilterContainer>
     </TopContainer>

     <SearchResult data={filteredData} />

     
    </Container>
  )
}

export default App
const Container= styled.div`
background-color: #4f4343`;
const TopContainer= styled.section`
background-color: #342825`;
const FilterContainer= styled.section``;
const Button= styled.button`
background-color: #ba7777
`;
