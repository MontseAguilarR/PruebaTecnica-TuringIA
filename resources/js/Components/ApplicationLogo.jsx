export default function ApplicationLogo(props) {
    return (
        <img
            {...props}
            src="/images/Logo.png" // Cambia esto por la ruta de tu logo
            alt="Logo"
            style={{ width: '350px', height: 'auto' }} // Puedes ajustar el tamaño aquí
        />
    );
}
