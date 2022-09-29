import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    
  >
    <circle cx="130" cy="116" r="115" /> 
    <rect x="0" y="305" rx="15" ry="15" width="280" height="85" /> 
    <rect x="-1" y="247" rx="21" ry="21" width="280" height="36" /> 
    <rect x="3" y="404" rx="11" ry="11" width="101" height="36" /> 
    <rect x="118" y="402" rx="23" ry="23" width="161" height="38" />
  </ContentLoader>
)

export default Skeleton