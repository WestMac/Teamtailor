import { Component } from "react";
import CandidateService from "../services/CandidateService"

export default class Button extends Component {
    constructor () {
        super();
        this.state = {
            downloadLink: '',
        }
    }

    click = async e => {
        e.preventDefault();
        const candidatesRequest = await CandidateService.get('/candidates')
        return this.setState({ downloadLink: candidatesRequest })
    }

    render () {
        return (
            <div className="buttonWrapper">
                <a href='http://localhost:4444/candidates'>download</a>
                <button
                    type="button"
                    onClick={e => this.click(e)}
                    className="btn"
                >
                    Fetch Candidates
                </button>
            </div>
        )
    }

}