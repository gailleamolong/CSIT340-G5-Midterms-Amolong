export default function Controls({handleClick, cName, label}) {
    function handle() {
        handleClick();
    }
    return (
        <button
                className={`${cName}`}
                onClick={handle}
                >
            {label}
        </button>
    ); 
}
