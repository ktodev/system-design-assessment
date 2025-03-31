interface RatingProps {
    value: number;
}

function Rating({ value }: RatingProps) {
    return (
      <div className="rating">
        {[1, 2, 3, 4, 5].map((star) => {
          return (  
            <span key={star}
              style={{
                color: value >= star ? 'gold' : 'gray',
                fontSize: "15px",
                fontWeight: "bold",
                marginRight: "5px",
              }}
            >
              ★
            </span>
          )
        })}
      </div>
    )
  }
  
  export default Rating;