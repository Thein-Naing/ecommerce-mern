import { useParams, Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import products from '../products';
import Rating from '../components/Rating';

const ProductScreen = () => {
  const { id: productId} = useParams();
  const product = products.find((p) => p._id === productId);


  return (
    <>


    </>
  )
}

export default ProductScreen
