import { Component } from "react";

class FormComponent extends Component {


    onBtnSendDataClick() {
        console.log("Form đã được submit");
    }

    onDataChange(value) {
        let placeholder = value.target.placeholder;
        let val = value.target.value
        placeholder ? console.log(value.target.placeholder, val) : console.log("Country: ", val);


    }

    render() {
        return (
            <>
                <form>
                    <div className="container jumbotron bg-light p-5 mt-3">
                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label">First name</label>
                            <div className="col-sm-8 mb-3">
                                <input className="form-control" placeholder="Your name.." onChange={this.onDataChange} />
                            </div>

                            <label className="col-sm-4 col-form-label">Last name</label>
                            <div className="col-sm-8 mb-3">
                                <input className="form-control" placeholder="Your last name.." onChange={this.onDataChange} />
                            </div>

                            <label className="col-sm-4 col-form-label">Country</label>
                            <div className="col-sm-8 mb-3">
                                <select className="form-control" onChange={this.onDataChange}>
                                    <option value="AUS">Australia</option>
                                    <option value="USA">United State of America</option>
                                    <option value="VN">Vietnam</option>
                                    <option value="CAN">Canada</option>
                                </select>
                            </div>

                            <label className="col-sm-4 col-form-label">Subject</label>
                            <div className="col-sm-8 mb-3">
                                <textarea className="form-control" placeholder="Write something.." rows="7" onChange={this.onDataChange} />
                            </div>
                        </div>
                        <button className="btn btn-success" type="button" onClick={this.onBtnSendDataClick}>send data</button>
                    </div>
                </form>

            </>

        )
    }
}
export default FormComponent;