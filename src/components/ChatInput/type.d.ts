interface ChatInputProps{
    id:string,
    label ?: string,
    fullWidth ?: boolean,
    color ?: PropTypes.color,
    ariaLabel ?: string,
    styles ?: any
    value : string,
    onClick : (e)=>void,
    onChange : (e)=>void,
    
}