import React from "react"
import { Link, useParams } from "react-router-dom"

export default function HostVanDetail() {
    const [vans, setVans] = React.useState([])
    const params = useParams()

    React.useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [params.id])

    const vanElements = vans.map(van => (
        <section key={van.id}>
            <div>
                <img src={van.imageUrl} alt={van.name} />
            </div>
            <div>
                <p>{van.type}</p>
                <h3>{van.name}</h3>
                <p>{van.price}<span>day</span></p>
            </div>
        </section>
    ))

    return (
        <div>
            {vanElements}
            <Link>Details</Link>
            <Link>Pricing</Link>
            <Link>Photos</Link>
        </div>
    )
}