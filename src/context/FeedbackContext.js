import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid"

// // data
// import FeedbackData from '../data/FeedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is feedback item 1',
            rating: 10
        },
        {
            id: 2,
            text: 'This item is feedback item 2',
            rating: 9
        },
        {
            id: 3,
            text: 'This item is feedback item 3',
            rating: 8
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const addFeedback = (newFeedback) => {
        newFeedback.id = +uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const updateFeedback = (id, updatedItem) => {
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updatedItem} : item))
    }

    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext