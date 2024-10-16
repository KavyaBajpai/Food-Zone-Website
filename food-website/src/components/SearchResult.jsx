import React from 'react'
import styled from 'styled-components';
import { BASE_URL } from '../App';
const SearchResult= ({data}) => 
 {
  return (
    <BottomContainer>  
       <FoodCards className='flex flex-col gap-4  items-center p-4 lg:grid lg:grid-cols-2 lg:justify-items-center  mt-6 '>
         {
            data?.map((food)=>
            (
                <FoodCard key={food.name} className='flex p-2 h-[167px] w-[340px] border-white-[2px] rounded-md  bg-gray-500 backdrop-blur-sm'>
                    <div className='food-image flex items-center' >
                       <img src={BASE_URL+food.image}/>
                    </div>
                    <div className='food-info flex flex-col gap-2 p-4 items-center'>
                        {/* <div className='info'> */}
                          <h3 className='text-2xl text-white font-medium'>{food.name}</h3>
                          <p className='text-white text-sm text-center'>{food.text}</p>
                          <Button className='w-fit p-[3px]'>$ {food.price}.00</Button>
                        {/* </div> */}
                       
                    </div>
                </FoodCard>
            ))
         }
       </FoodCards>
  </BottomContainer>
  )
}

export default SearchResult

const BottomContainer= styled.section`
// height: 100vh;
min-height: 100vh;
background-image: url("/bg.png");
background-size: cover;
`;
const FoodCards= styled.section`
`;
const FoodCard= styled.div`

`;
const Button= styled.button`
background-color: #ba7777
`;



// 