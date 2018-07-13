import React from 'react'
import { Helmet } from 'react-helmet'

const NoMatch = () => {
    return  (
        <div className="nomatch container">
            <Helmet>
                <title>Sunil Kumar - Not Found!</title>
            </Helmet>
            <h1>Did you do something wrong!</h1>
        </div>
    )
}

export default NoMatch;