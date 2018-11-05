import React, { Component } from 'react';

class Table extends Component {

    render() {
        return (
            <div className="Table container">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Profile</th>
                            <th>Camper</th>
                            <th className="selected" onClick={ () => this.props.handleClick('recent')}>Last 30 days</th>
                            <th className="selected" onClick={ () => this.props.handleClick('allTime')}>Total Points</th>
                            <th>Last Update</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            this.props.selected.map( (camper, i) => {
                                return (
                                    <tr key={i}>
                                        <th scope="row">{i + 1}</th>
                                        <td><a href={`https://freecodecamp.org/${camper.username}`}  target="_blank"><img className="img" src={camper.img} alt={camper.username} /></a></td>
                                        <td><a href={`https://freecodecamp.org/${camper.username}`}>{camper.username}</a></td>
                                        <td>{camper.recent}</td>
                                        <td>{camper.alltime}</td>
                                        <td>{new Date(camper.lastUpdate).toLocaleString()}</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;