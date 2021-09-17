import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import "./index.css";
import { chatInputProps } from '../../constants';

const index = ({ htmlFor = chatInputProps.htmlFor, label = chatInputProps.label, id = chatInputProps.id, placeholder = chatInputProps.placeholder }) => {
    return (
        <div className="p">
            <FormControl>
                <InputLabel htmlFor={htmlFor} >{label}</InputLabel>
                <Input id={id} placeholder={placeholder} />
            </FormControl>
            <section className="k">
                <PlayCircleFilledIcon />
            </section>
        </div>
    )
}

export default index;