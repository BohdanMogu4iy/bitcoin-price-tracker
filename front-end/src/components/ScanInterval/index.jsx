import React from 'react'

const ScanInterval = () => {
    return (
        <>
            <select name="interval">
                <option value="60">1 minute</option>
                <option value="1800">30 minutes</option>
                <option value="3600">1 hour</option>
                <option value="86400">1 day</option>
            </select>
        </>
    )
}

export default ScanInterval