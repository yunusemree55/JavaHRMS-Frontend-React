import React from 'react'
import { Dimmer, Segment, Loader, Image } from 'semantic-ui-react'

function LoadingSide() {
  return (
    <div>
        <Segment>
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>
    
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </Segment>
    </div>
  )
}

export default LoadingSide