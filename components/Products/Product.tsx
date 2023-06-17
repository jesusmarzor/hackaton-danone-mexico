export const Product: React.FunctionComponent<Product> = ({slug, image, name, num, description, cal}) => {
    return(
        <p>{name} + "x" + num</p>
    )
}