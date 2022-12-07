import { Card, Icon, Image } from 'semantic-ui-react'



const VenueCard = ({name, address, city, state, postal_code, image}) => {

    return (
        <Card>
        <Image src={image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span>{`${address} ${city}, ${state} ${postal_code}`}</span>
          </Card.Meta>
          {/* <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description> */}
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            ##### upcoming events
          </a>
        </Card.Content>
      </Card>
    )
}

export default VenueCard






// t.string "name"
// t.string "address"
// t.string "city"
// t.string "state"
// t.integer "postal_code"
// t.string "image"