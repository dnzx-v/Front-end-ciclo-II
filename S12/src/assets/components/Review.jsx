import "./Review.css";

export default function Review({ reviewerName, rating, comment, date }) {
    const formattedDate = date
        ? new Date(date).toLocaleDateString()
        : null;

    return (
        <article className="review-card">
            <header className="review-header">
                <h3 className="review-author">{reviewerName}</h3>
                {formattedDate && (
                    <time className="review-date" dateTime={date}>
                        {formattedDate}
                    </time>
                )}
            </header>
            <p
                className="review-rating"
                aria-label={`Calificación: ${rating} de 5`}
            >
                <span aria-hidden="true">
                    {"★".repeat(rating)}
                    {"☆".repeat(5 - rating)}
                </span>
                <span className="review-rating-value">{rating}/5</span>
            </p>
            <p className="review-comment">{comment}</p>
        </article>
    );
}
