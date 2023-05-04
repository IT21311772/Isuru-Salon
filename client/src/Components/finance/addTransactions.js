import { Form } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import './transactions.css';

function CreatePost () {
    const navigate = useNavigate();
    const [data, setData] = useState ({
        amount:"",
        type:"",
        category:"",
        date:"",
        description:"",
        reference:"",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setData((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const handleClick = (event) => {
        event.preventDefault();

        axios.post("/api/Fin/add", data)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

        navigate("trans");
        
    };

    return (
        <div className="packages-create">

        <div className="Create-post">
            <h1 className="title">Add Transaction Details</h1><br />
            <Form className="Form">
                <Form.Group className="Form-Group">
                    <Form.Control className="Form-Control" 
                        name="amount" 
                        value={data.amount}
                        placeholder="Amount"
                        onChange={handleChange}
                        style={{width:"80%", marginLeft:"10%"}}
                        required />
                    
                    <Form.Select name="type" className="Form-Control" 
                        value={data.type} 
                        placeholder="Transaction Type"
                        onChange={handleChange} 
                        style={{width:"80%", marginLeft:"10%"}}
                        required>
                            <option>Package Type</option>
                            <option>Income</option>
                            <option>Expenses</option>
                            
                    </Form.Select>

                    <Form.Control className="Form-Control"
                        name="category" 
                        value={data.category}
                        placeholder="Category"
                        onChange={handleChange} 
                        style={{width:"80%", marginLeft:"10%"}}
                        required />
                    <Form.Control className="Form-Control"
                        name="date" 
                        value={data.date}
                        placeholder="Date"
                        onChange={handleChange} 
                        style={{width:"80%", marginLeft:"10%"}}
                        required />
                    <Form.Control className="Form-Control"
                        name="description" 
                        value={data.description}
                        placeholder="Description"
                        onChange={handleChange} 
                        style={{width:"80%", marginLeft:"10%"}}
                        required />
                    <Form.Control className="Form-Control"
                        name="reference" 
                        value={data.reference}
                        placeholder="Reference"
                        onChange={handleChange} 
                        style={{width:"80%", marginLeft:"10%"}}
                        required />
                </Form.Group>
                <br />
                < button style={{borderRadius:"5px", background:"#b30059", padding:"1.5%", width:"45%", fontSize:"17px", 
                paddingLeft:"5px", paddingRight:"5px", border:"#b30059"}} onClick={handleClick}>ADD TRANSACTION</button>
            </Form>
            <br />
            {/* <br />
            <button style={{borderRadius:"5px", background:"#a66f72", padding:"0.5%"}} onClick={() => navigate(-1)}> BACK </button>   */}
        </div>
        </div>
    );
}

export default CreatePost;