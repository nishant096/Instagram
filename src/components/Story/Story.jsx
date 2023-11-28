import React from 'react'
import StoryViewer from '../StoryComponents/StoryViewer'

const Story = () => {
    const story = [
        {
            image:"https://images.pexels.com/photos/12982035/pexels-photo-12982035.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            image:"https://images.pexels.com/photos/19225765/pexels-photo-19225765/free-photo-of-a-woman-holding-two-dogs-in-her-arms.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            image:"https://images.pexels.com/photos/19240445/pexels-photo-19240445/free-photo-of-a-man-in-a-white-sweater-is-sitting-at-a-desk-with-a-laptop.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            image:"https://images.pexels.com/photos/17855161/pexels-photo-17855161/free-photo-of-plants-and-grass-near-road-on-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            image:"https://images.pexels.com/photos/18374442/pexels-photo-18374442/free-photo-of-flag-and-street-light-over-narrow-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }
    ]
  return (
    <div>
      <StoryViewer stories={story} duration={2000} />

    </div>
  )
}

export default Story
