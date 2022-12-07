import { Card, Icon, Image } from 'semantic-ui-react'





const EventCard = ({ id, name, venue, event_type, datetime_local, image }) => {

    return (
        <Card>
        <Image src={image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          {/* <Card.Meta>
            <span>{`${address} ${city}, ${state} ${datetime_local}`}</span>
          </Card.Meta> */}
          <Card.Description>
          <span>{`${venue} ${event_type}, ${datetime_local}`}</span>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            ##### Spotlight users attending
          </a>
        </Card.Content>
      </Card>
    )
}

export default EventCard













// t.string "name"
// t.string "venue"
// t.string "event_type"
// t.datetime "datetime_local"