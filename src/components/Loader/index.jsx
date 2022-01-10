import React from "react"
import BeatLoader from "react-spinners/BeatLoader";

import './styles.css'

const Loader = ({ size, color, loading = true }) => {
    return (
        <div className="container-loader">
            <BeatLoader color={color} loading={loading} size={size} />
        </div>
    )
}

export default Loader
