import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axios/axios';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Sheet.scss';

function Sheet() {
    const [sheets, setSheets] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axiosInstance.get('/Sheet')
            .then(response => {
                setSheets(response.data);
            })
            .catch(error => {
                setError("Erreur de récupération de fiche, as tu vraiment des fiches ?");
            });
    }, []);

    return (
        <div>
            <Header />
            <h1>Hello ma poule</h1>
            <div>
                {error ? (
                    <p>{error}</p>
                ) : (
                    sheets.length > 0 ? (
                        sheets.map(sheet => (
                            <div key={sheet.id} className="sheet">
                                <h2>{sheet.name}</h2>
                            </div>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Sheet;
