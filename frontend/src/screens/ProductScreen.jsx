import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap';
import products from '../products';
import Rating from '../components/Rating';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

const ProductScreen = () => {
  const { id: productId} = useParams();
  const product = products.find((p) => p._id === productId);


  return (
    <>
    <Link className="btn btn-light my-3" to='/'>
      <FiChevronLeft />
      <FiChevronLeft />
    </Link>
    <Row>
      <Col md={5}>
        <Image src={product.image} alt={product.name} fluid/>
      </Col>

      <Col md={4}>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <h3>{product.name}</h3>
          </ListGroup.Item>
          <ListGroup.Item>
            <Rating  value={product.rating} text={`${product.numReviews} reviews`}/>
          </ListGroup.Item>
          <ListGroup.Item>
            Price:  ${product.price}
          </ListGroup.Item>
          <ListGroup.Item>
            Description: {product.description}
          </ListGroup.Item>
        </ListGroup>
      </Col>

      <Col md={3}>
        <Card>
        <ListGroup variant='flush'>
        <ListGroup.Item>
          <Row>
            <Col>Price:</Col>
            <Col>
            <strong>${product.price}</strong>
            </Col>
          </Row>
          </ListGroup.Item>
          </ListGroup>

          <ListGroup variant='flush'>
        <ListGroup.Item>
          <Row>
            <Col>Status:</Col>
            <Col>
            <strong>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</strong>
            </Col>
          </Row>
          </ListGroup.Item>
          </ListGroup>
          <ListGroup variant='flush'>
          <ListGroup.Item>
            <Button
            className='btn-block'
            type='button'
            disabled ={product.countInStock === 0}> Add to cart
            </Button>
          </ListGroup.Item>
          </ListGroup>







        </Card>
      </Col>
    </Row>
    </>
  )
}

export default ProductScreen
