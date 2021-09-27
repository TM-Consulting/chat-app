import Button from '@material-ui/core/Button';
import { ButtonProps } from '@material-ui/core/Button';
const index = ({ text, className, onClick, ...buttonProps }: CustomButtonProps & ButtonProps) => {

  return (


    <Button
      className={className}
      onClick={onClick}
      {...buttonProps}
    >
      {text}

    </Button>


  );
}
export default index;
