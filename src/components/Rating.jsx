import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
const Rating = ({ rating, onClick, style }) => {
    return (
        <>
            {[...Array(5)].map((_, i) => (
                <span key={i} onClick={() => onClick(i)} style={{}}>
                    {rating > i ? (
                        <StarIcon fontSize="15px" />
                    ) : (
                        <StarOutlineIcon fontSize="15px" />
                    )}
                </span>
            ))}
        </>
    )
}
export default Rating;