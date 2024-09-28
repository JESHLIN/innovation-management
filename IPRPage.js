import React, { useState } from 'react';
import './IPRPage.css';

const IPRPage = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [status, setStatus] = useState('Pending');
    const [iprList, setIprList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newIpr = { title, description, date, status };
        setIprList([...iprList, newIpr]);
        setTitle('');
        setDescription('');
        setDate('');
        setStatus('Pending');
    };

    return (
        <div>
            <header>
                <h1>IPR Management</h1>
            </header>
            <main>
                <section className="form-section">
                    <h2>Add IPR Record</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />

                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        ></textarea>

                        <label htmlFor="date">Date of Application:</label>
                        <input
                            type="date"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />

                        <label htmlFor="status">Status:</label>
                        <select
                            id="status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            required
                        >
                            <option value="Pending">Pending</option>
                            <option value="Approved">Approved</option>
                            <option value="Rejected">Rejected</option>
                        </select>

                        <button type="submit">Add IPR</button>
                    </form>
                </section>

                <section className="ipr-list-section">
                    <h2>Existing IPR Records</h2>
                    <ul id="iprList">
                        {iprList.map((ipr, index) => (
                            <li key={index}>
                                <strong>{ipr.title}</strong>
                                <p>{ipr.description}</p>
                                <p>Date: {ipr.date}</p>
                                <p>Status: {ipr.status}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    );
};

export default IPRPage;
