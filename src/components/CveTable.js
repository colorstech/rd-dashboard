import React from 'react';
import CveService from '../services/CveService';

class CveTable extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            cves:[]
        }
    }
    componentDidMount(){
        CveService.getYearly().then((response) => {
            this.setState({ cves: response.data})
        });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center">Yearly CVE Severities Table</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <td>Year</td>
                            <td>Low</td>
                            <td>Medium</td>
                            <td>High</td>
                            <td>Critical</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.cves.map(
                                cve => 
                                <tr>
                                     <td> {cve.year}</td>   
                                    <td> {cve.low}</td>   
                                     <td> {cve.medium}</td>   
                                     <td> {cve.high}</td>  
                                     <td> {cve.critical}</td>   
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>

        )
    }
}

export default CveTable