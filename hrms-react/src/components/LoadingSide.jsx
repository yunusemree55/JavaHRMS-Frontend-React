import React from 'react'
import { Dimmer, Loader} from 'semantic-ui-react'

function LoadingSide() {
  return (
    <div>
       
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>
    
          
    </div>
  )
}

export default LoadingSide