import React from 'react';
import { useParams } from 'react-router-dom';
import StarshipDetails from '../sw-components/starship-details';

const ItemStarship = () => {

   const { id } = useParams();

   return (
      <div>
         <StarshipDetails itemId={id}/>
      </div>
   );
}

export { ItemStarship };
