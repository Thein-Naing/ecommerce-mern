import { Alert} from 'react-bootstrap';

const Message = ({variant, children}) => { // 2 argument props.
  return (
   <Alert
   variant={variant}>
    {children}
    </Alert>
  )
}

Message.defaultProps = {
  variant: 'info'
}
export default Message
