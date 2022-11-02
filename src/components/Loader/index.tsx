import React from "react"
import BarLoader from "react-spinners/BarLoader";

import './styles.css'

interface LoaderType {
    size: string | number,
    color: string,
    loading: boolean
}

const Loader = ({ size, color, loading } : LoaderType) => {
    return (
        <div className="container-loader">
            <BarLoader color={color} loading={loading} height={6} />
        </div>
    )
}

export default Loader
