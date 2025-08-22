import About from '@/components/AboutPage'
import React from 'react'

export const metadata = {
  title: "About Us | OrganicHarvest",
  description: "Learn about our mission to provide healthy organic produce",
};

const about = () => {
  return (
    <div>
        <About />
    </div>
  )
}

export default about