import { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'

// context
import FeedbackContext from '../context/FeedbackContext'

// component
import FeedbackItem from "./FeedbackItem"

function FeedbackList() {
    const { feedback } = useContext(FeedbackContext)

    if (!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>
    }

    // framer motion animation
    return <div className="feedback-list">
        <AnimatePresence>
        {feedback.map((item) => (
            <motion.div 
                key={item.id}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
            >
                <FeedbackItem key={item.id} item={item} />
            </motion.div>
        ))}
        </AnimatePresence>
    </div>

    // return <div className="feedback-list">
    //     {feedback.map((item) => (
    //         <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
    //     ))}
    // </div>
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired
        })
    ).isRequired,
}

export default FeedbackList