import React, { Component, Fragment } from 'react'
import Film from './Film'

class FilmList extends Component{
    
    render() {

        const filmComponents = this.props.films.map((filmData) => {
            return (
                <Film
                    key={filmData.id}
                    name={filmData.name}
                    url={filmData.url}
                />
            )
        })

        return (
            <Fragment>
                {filmComponents}
            </Fragment>
        )
    }



}

export default FilmList