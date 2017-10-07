import React from 'react';
import  {Timeline} from 'react-twitter-widgets';

const TwitterCard = () =>{

    return(
        <div>
        <Timeline 
        
            dataSource={{
            
                sourceType: 'profile',
                screenName: 'IntergalacticQ'
            }}

            options={{

                username: 'IntergalacticQ',
                height: '520.188'
            }}


            onLoad={() => console.log('Timeline is loaded!')}
        />

        
        </div>
    )
}

export {TwitterCard};  