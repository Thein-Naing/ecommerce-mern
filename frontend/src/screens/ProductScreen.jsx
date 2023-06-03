import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
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
            price:  ${product.price}
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={3}>
        <Card>
        <ListGroup variant='flush'>
          </ListGroup>

        </Card>
      </Col>
    </Row>


    </>
  )
}

export default ProductScreen
