import { Card, Icon, Image, Button, Label } from 'semantic-ui-react'





const EventCard = ({ id, name, venue, event_type, datetime_local, image, updateUserEvents, currentUser, removeUserEvent}) => {

  



    return (
        <Card centered>
          <Image src={`${process.env.REACT_APP_BACKEND_URL}${image}`} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{name}</Card.Header>
              <Card.Description>
              <span>{`${venue} ${event_type}, ${datetime_local}`}</span>
              </Card.Description>
           </Card.Content>
          <Card.Content extra>
            {currentUser?
          <Button as='div' labelPosition='right' onClick={()=>removeUserEvent(id)}>
            <Button color='red'>
              <Icon name='heart' />
                Not attending
            </Button>
            <Label as='a' basic color='red' pointing='left'>
              2,048 Spotlights
            </Label>
          </Button>
          :
          <Button as='div' labelPosition='right' onClick={()=>updateUserEvents(id)}>
            <Button color='red'>
              <Icon name='heart' />
                Attend!
            </Button>
            <Label as='a' basic color='red' pointing='left'>
              2,048 Spotlights
            </Label>
          </Button>
          }
          </Card.Content>
      </Card>
    )
}

export default EventCard



// t.string "name"
// t.string "venue"
// t.string "event_type"
// t.datetime "datetime_local"