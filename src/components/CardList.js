import React from 'react';
import Card from './Card';

const CardList = ({robotsAsProp}) => {
    const cardsArray = robotsAsProp.map((user,i) => {
       return (
           <Card    key={i} 
                    id={robotsAsProp[i].id} 
                    name={robotsAsProp[i].name} 
                    email={robotsAsProp[i].email}
            />
       ); 
    })
    return (
<div>
{cardsArray}    
</div>
    );
}

export default CardList;