export default function ApplicationLogo(props) {
    return (
        <img
            src={props.src} // Sử dụng props.src
            alt={props.alt || "Logo"} // Giá trị mặc định cho alt
            {...props}
        />
    );
}