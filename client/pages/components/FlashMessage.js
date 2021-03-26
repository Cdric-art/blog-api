
export default function FlashMessage({ message, type }) {
    return (
        <div className={`flash ${type}`}>
            <p>{message}</p>
        </div>
    );
};
