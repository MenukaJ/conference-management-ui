import React, {useState} from "react";
import EditorSideNav from "../Navbar/EditorSideNav";
import axios from "axios";

export default function AddConferenceDetails(props) {

    const [data, setData] = useState({
        conferenceId: "",
        topic: "",
        description: "",
        conductor: "",
        venue: "",
        date: "",
        startTime: "",
        endTime: "",
        payment: ""
    })

    function submit(e) {
        e.preventDefault();
        axios.post("https://icaf-backend.herokuapp.com/conference-details/save", data).then((res) => {
            console.log(data);
            alert(res.data.messages);
            props.history.push("/conference-details");
        }).catch((err) => {
            if(err.response.data.topic !== undefined) {
                alert(err.response.data.topic);
            } else if(err.response.data.conductor !== undefined) {
                alert(err.response.data.conductor);
            } else if(err.response.data.conferenceId !== undefined) {
                alert(err.response.data.conferenceId);
            } else if(err.response.data.venue !== undefined) {
                alert(err.response.data.venue);
            } else if(err.response.data.date !== undefined) {
                alert(err.response.data.date);
            } else if(err.response.data.startTime !== undefined) {
                alert(err.response.data.startTime);
            } else if(err.response.data.endTime !== undefined) {
                alert(err.response.data.endTime);
            } else if(err.response.data.payment !== undefined) {
                alert(err.response.data.payment);
            } else if(err.response.data.message !== undefined) {
                alert(err.response.data.message);
            } else {
                alert(err);
            }
        })
    }

    function handle(e) {
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
    }

    return(
        <div className="main">
            <EditorSideNav />
            <div className="container mt-3" style={{
                marginLeft: '60px',
                backgroundColor: '#ccccff',
                boxShadow: '1px 2px 2px 2px rgba(0.3, 0.3, 0.3, 0.3)',
                borderRadius: '5px',
                height : '1200px'
            }}>
                <br/>
                <div className="card" style={{width : '70%', marginTop: 0, marginLeft : '15px', borderRadius: '5px'}}>
                    <div className="card-header" style={{backgroundColor: '#f2f2f2'}}>
                        <h4>Conference Details</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={(e) => submit(e)}>
                            <div className="form-group row">
                                <label htmlFor="conferenceId" className="col-sm-3">Conference</label>
                                <div className="col-sm-5">
                                    <input type="text" onChange={(e) => handle(e)} className="form-control" id="conferenceId" placeholder="Enter Conference" value={data.conferenceId} required/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="topic" className="col-sm-3">Topic</label>
                                <div className="col-sm-5">
                                    <input type="text" onChange={(e) => handle(e)} className="form-control" id="topic" placeholder="Enter Topic" value={data.topic} required/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="description" className="col-sm-3">Description</label>
                                <div className="col-sm-5">
                                    <textarea onChange={(e) => handle(e)} className="form-control" id="description" cols="30" rows="6" placeholder="Enter Description" value={data.description} required/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="conductor" className="col-sm-3">Conductor</label>
                                <div className="col-sm-5">
                                    <input type="text" onChange={(e) => handle(e)} className="form-control" id="conductor" placeholder="Enter Conductor" value={data.conductor} required/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="venue" className="col-sm-3">Venue</label>
                                <div className="col-sm-5">
                                    <input type="text" onChange={(e) => handle(e)} className="form-control" id="venue" placeholder="Enter Venue" value={data.venue} required/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="date" className="col-sm-3">Date</label>
                                <div className="col-sm-5">
                                    <input type="text" onChange={(e) => handle(e)} className="form-control" id="date" placeholder="Enter Date" value={data.date} required/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="startTime" className="col-sm-3">Start Time</label>
                                <div className="col-sm-5">
                                    <input type="text" onChange={(e) => handle(e)} className="form-control" id="startTime" placeholder="Enter Start Time" value={data.startTime} required/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="endTime" className="col-sm-3">End Time</label>
                                <div className="col-sm-5">
                                    <input type="text" onChange={(e) => handle(e)} className="form-control" id="endTime" placeholder="Enter End Time" value={data.endTime} required/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="payment" className="col-sm-3">Payment</label>
                                <div className="col-sm-5">
                                    <input type="text" onChange={(e) => handle(e)} className="form-control" id="payment" placeholder="Enter Payment" value={data.payment} required/>
                                </div>
                            </div><br/>
                            <button type="submit" className="btn btn-primary">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}