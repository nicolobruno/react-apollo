import React from "react"
import BeatLoader from "react-spinners/BeatLoader";

import './styles.css'

interface LoaderType {
    size: string | number,
    color: string,
    loading: boolean
}

const Loader: React.FC<LoaderType> = ({ size, color, loading }) => {
    return (
        <div className="container-loader">
            <BeatLoader color={color} loading={loading} size={size} />
        </div>
    )
}

export default Loader