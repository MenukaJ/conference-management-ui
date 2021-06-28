import React, {useState, useEffect} from "react";
import axios from "axios";
import AdminSideNav from "../Navbar/AdminSideNav";

export default function ApproveRejectConferenceDetails(props) {

    const [data, setData] = useState({
        id: "",
        conferenceId: "",
        conferenceName: "",
        conferenceYear: "",
        topic: "",
        description: "",
        conductor: "",
        venue: "",
        date: "",
        startTime: "",
        endTime: "",
        payment: "",
        status: "",
        remarks: "",
        createdUser: "",
        createdDate: "",
        approvedUser: "",
        approvedDate: "",
        rejectedUser: "",
        rejectedDate: "",
        userName: ""
    });

    useEffect(() => {
        getConferenceDetail();
    }, [])

    function getConferenceDetail() {
        const conferenceDetailId = props.match.params.id;
        axios.get("https://icaf-backend.herokuapp.com/conference-details/" + conferenceDetailId).then((res) => {
            console.log(res.data);
            setData(res.data);
        }).catch((err) => {
            alert(err);
        })
    }

    function approve(e) {
        e.preventDefault();
        const conferenceDetailId = props.match.params.id;
        axios.put("https://icaf-backend.herokuapp.com/conference-details/approve/" + conferenceDetailId, data).then((res) => {
            console.log(data);
            alert(res.data.messages);
            props.history.push("/conference-details-admin");
        }).catch((err) => {
            if(err.response.data.userName !== undefined) {
                alert(err.response.data.userName);
            } else if(err.response.data.remarks !== undefined) {
                alert(err.response.data.remarks);
            } else {
                alert(err);
            }
        })
    }

    function reject(e) {
        e.preventDefault();
        const conferenceDetailId = props.match.params.id;
        axios.put("https://icaf-backend.herokuapp.com/conference-details/reject/" + conferenceDetailId, data).then((res) => {
            console.log(data);
            alert(res.data.messages);
            props.history.push("/conference-details-admin");
        }).catch((err) => {
            if(err.response.data.userName !== undefined) {
                alert(err.response.data.userName);
            } else if(err.response.data.remarks !== undefined) {
                alert(err.response.data.remarks);
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
            <AdminSideNav />
            <div className="container mt-3" style={{
                marginLeft: '60px',
                backgroundColor: '#ccccff',
                boxShadow: '1px 2px 2px 2px rgba(0.3, 0.3, 0.3, 0.3)',
                borderRadius: '5px',
                height : '2200px'
            }}>
                <br/>
                <div className="card" style={{width : '75%', marginTop: 0, marginLeft : '15px', borderRadius: '5px'}}>
                    <div className="card-header" style={{backgroundColor: '#f2f2f2'}}>
                        <h4>Conference Details</h4>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group row">
                                <label htmlFor="id" className="col-sm-3">Id</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" id="id" value={data.id} readOnly/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="conferenceId" className="col-sm-3">Conference Id</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" id="conferenceId" value={data.conferenceId} readOnly/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="conferenceName" className="col-sm-3">Conference Name</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" id="conferenceName" value={data.conferenceName} readOnly/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="topic" className="col-sm-3">Topic</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" id="topic" value={data.topic} readOnly/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="description" className="col-sm-3">Description</label>
                                <div className="col-sm-5">
                                    <textarea type="text" className="form-control" id="description" cols="30" rows="6" value={data.description} readOnly/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="conductor" className="col-sm-3">Conductor</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" id="conductor" value={data.conductor} readOnly/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="venue" className="col-sm-3">Venue</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" id="venue" value={data.venue} readOnly/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="date" className="col-sm-3">Date</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" id="date" value={data.date} readOnly/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="startTime" className="col-sm-3">Start Time</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" id="startTime" value={data.startTime} readOnly/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="endTime" className="col-sm-3">End Time</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" id="endTime" value={data.endTime} readOnly/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="payment" className="col-sm-3">Payment</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" id="payment" value={data.payment} readOnly/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="status" className="col-sm-3">Status</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" id="status" value={data.status} readOnly/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="createdUser" className="col-sm-3">Created By</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" id="createdUser" value={data.createdUser} readOnly/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="createdDate" className="col-sm-3">Created Date</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" id="createdDate" value={data.createdDate} readOnly/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="approvedUser" className="col-sm-3">Approved By</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" id="approvedUser" value={data.approvedUser} readOnly/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="approvedDate" className="col-sm-3">Approved Date</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" id="approvedDate" value={data.approvedDate} readOnly/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="rejectedUser" className="col-sm-3">Rejected By</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" id="rejectedUser" value={data.rejectedUser} readOnly/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="rejectedDate" className="col-sm-3">Rejected Date</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" id="rejectedDate" value={data.rejectedDate} readOnly/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="remarks" className="col-sm-3">Remarks</label>
                                <div className="col-sm-5">
                                    <textarea onChange={(e) => handle(e)} className="form-control" id="remarks" cols="30" rows="6" placeholder="Enter Remarks" value={data.remarks} required/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="userName" className="col-sm-3">User Name</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" onChange={(e) => handle(e)} id="userName" placeholder="Enter User Name" value={data.userName} required/>
                                </div>
                            </div><br/>
                            <button onClick={(e) => approve(e)} className="btn btn-primary">Approve</button>&nbsp;
                            <button onClick={(e) => reject(e)} className="btn btn-danger">Reject</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}