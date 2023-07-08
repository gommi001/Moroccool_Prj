import React from 'react'
import './description.scss'
import './DescriptionData.js'
import DescriptionData from './DescriptionData.js'

function Description() {
  return (
    <div className="description">
            <h1>Why You Choose Morocco</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>

            <DescriptionData
            cName="first-des"
            heading="This is Morocco"
            text="One of my most ionic views in Luzan, Mt. Taal boasts assets
            a volcano inside a lake inside an island. If you fancy a closer
            look, the hike up to the crator is a mere 45 minutes, and is
                   easy enough for beginers. Guides will assist you most of
                   the way; and you'll see the peuliar environment found On
                   an active volcano, including volcanic rocks and steam
                   vents. The hike can be dusty and hot, so plan for an early
                   morning trip, and then unwind with some bulalo before
                   heading back home!"

            img1='https://images.unsplash.com/photo-1549140600-78c9b8275e9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60'
            img2='https://images.unsplash.com/photo-1538600838042-6a0c694ffab5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW9yb2Njb3xlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60'
            />
            <DescriptionData
            cName="first-des-reverse"
            heading="Morocco's Best Places"
            text="One of my most ionic views in Luzan, Mt. Taal boasts assets
            a volcano inside a lake inside an island. If you fancy a closer
            look, the hike up to the crator is a mere 45 minutes, and is
                   easy enough for beginers. Guides will assist you most of
                   the way; and you'll see the peuliar environment found On
                   an active volcano, including volcanic rocks and steam
                   vents. The hike can be dusty and hot, so plan for an early
                   morning trip, and then unwind with some bulalo before
                   heading back home!"

            img1='https://images.unsplash.com/photo-1550697318-929498858774?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW9yb2Njb3xlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60'
            img2='https://images.unsplash.com/photo-1545167496-c1e092d383a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9yb2Njb3xlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60'
            />
        </div>
  )
}

export default Description