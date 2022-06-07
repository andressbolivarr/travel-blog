import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useRef, useEffect } from 'react'

const  Map = ({ latitude, longitude}) => {


    const NEXT_PUBLIC_MAP_API = 'pk.eyJ1Ijoic3R0cmVwaXRvc28iLCJhIjoiY2w0M2JldnZ4MDM1MzNqbzBjZXd2ZmZtZiJ9.OpbRuTYWw_y5vSwDmsjQkg'

    mapboxgl.accessToken = NEXT_PUBLIC_MAP_API


        const mapContainer = useRef(null)
        const map = useRef(null)

    useEffect(() =>{
            if(map.current) return
            if ( longitude , latitude ){
                map.current = new mapboxgl.Map({
                    container: mapContainer.current,
                    style: 'mapbox://styles/mapbox/streets-v11',
                    center: [ longitude, latitude ],
                    zoom: 5
                })
            }
    }, [ longitude, latitude ])
    return(
            <div ref={mapContainer} className='map'/>
    )
}

export default Map