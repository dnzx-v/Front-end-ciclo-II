import Review from "./Review";

export default function CardProducto({
    id,
    category,
    name,
    stock,
    imageUrl,
    reviews = []
}) {
    return (
        <article>
            <span>{name}</span>
            <img src={imageUrl} alt={name} />
            <span>{category}</span>
            <span>{stock}</span>
            {reviews.length > 0 && (
                <div className="product-reviews">
                    <h2>Reseñas</h2>
                    {reviews.map((review, index) => (
                        <Review
                            key={`${review.reviewerName}-${review.date}-${index}`}
                            reviewerName={review.reviewerName}
                            rating={review.rating}
                            comment={review.comment}
                            date={review.date}
                        />
                    ))}
                </div>
            )}
        </article>
    );
}