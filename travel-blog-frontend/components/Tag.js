const Tag = ({ title }) => {
    const getColor = () => {
        let color
        switch(title.toLowerCase()){
            
            case 'Travel':
                color = 'rgb(76,184,96)'
                break
            case 'family':
                color = 'rgb(224,140,163,0.54)'
            case 'travel':
                color = 'rgb(255,142,14)'
            default:
                color = 'rgb(76,184,223)'
        }
        return color
    }
    return(
            <div style={{backgroundColor: getColor()}} className="tag">{title}</div>
    )
}

export default Tag