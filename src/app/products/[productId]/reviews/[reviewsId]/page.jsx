
const ReviewDetails = ({params}) => {
    return (
        <div>
            <h2>Review {params.reviewsId} for product {params.productId}</h2>
        </div>
    );
};

export default ReviewDetails;