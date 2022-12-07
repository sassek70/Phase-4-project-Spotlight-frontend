import { Card, Icon, Image, Button, Label } from 'semantic-ui-react'





const EventCard = ({ id, name, venue, event_type, datetime_local, image }) => {

    return (
        <Card>
          <Image src={image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{name}</Card.Header>
              <Card.Description>
              <span>{`${venue} ${event_type}, ${datetime_local}`}</span>
              </Card.Description>
           </Card.Content>
          <Card.Content extra>
          <Button as='div' labelPosition='right'>
            <Button color='red'>
              <Icon name='heart' />
                Attend!
            </Button>
            <Label as='a' basic color='red' pointing='left'>
              2,048 Spotlights
            </Label>
          </Button>
          </Card.Content>
      </Card>
    )
}

export default EventCard













// t.string "name"
// t.string "venue"
// t.string "event_type"
// t.datetime "datetime_local"